import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway()
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

  @SubscribeMessage('chat')
  handleMessage(client: Socket, message: string) {
    //클라이언트가 보낸 메시지를 저장
    const roomId = 'temp';
    this.chatService.addChatMessage(roomId, message);
    //해당 메시지를 모든 클라이언트에 전송
    this.server.emit('chat', message);
  }
  // TODO: roomId 만드는거 구현해야됨 시발
  @SubscribeMessage('privateMessage')
  handlePrivateMessage(client: Socket, data: { to: string; message: string }) {
    const toClient = this.connectedClients.get(data.to);
    if (toClient) {
      // 개별 사용자에게 메시지 전송
      toClient.emit('privateMessage', { from: client.id, message: data.message });
    }
  }
}
