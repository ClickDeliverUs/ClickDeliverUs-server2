import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway({ namespace: '/chat', cors: true }) // CORS Settings should be changed to increase security in actual service.
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // 연결된 클라이언트들을 저장하는 객체
  connectedClients: Map<string, Socket> = new Map();
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    //클라이언트가 연결되었을때 호출되는 메소드
    this.connectedClients.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    //클라이언트가 연결 해제되었을때 호출되는 메소드
    this.connectedClients.delete(client.id);
  }

  @SubscribeMessage('joinRoom')
  joinRoom(client: Socket, data: { cid: string; did: string }) {
    const chatRoomId = `${data.cid}-${data.did}`;
    client.join(chatRoomId);
  }

  @SubscribeMessage('chat')
  handleMessage(client: Socket, data: { cid: string; did: string; message: string }) {
    //클라이언트가 보낸 메시지를 저장
    const chatRoomId = `${data.cid}-${data.did}`;
    this.chatService.addChatMessage(chatRoomId, data.message);
    //해당 메시지를 모든 클라이언트에 전송
    this.server.to(chatRoomId).emit('chat', data.message);
  }
}
