import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ChatService {
  private logger: Logger = new Logger(ChatService.name);
  private chatRooms: Map<string, { expirationTime: Date }> = new Map();
  private chatMessages: Map<string, { messages: string[] }> = new Map();

  createChatRoom(cid: string, did: string) {
    const chatRoomId = `${cid}-${did}`;
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 3);

    this.chatRooms.set(chatRoomId, { expirationTime });
    this.logger.log(
      `Chatroom Successfully created. chatRoomId: ${chatRoomId}, cid: ${cid}, did: ${did}`,
    );
    return chatRoomId;
  }
  // TODO: 추후에 배달 기능 구현 후 해당 부분 수정 필요
  // 채팅방을 생성한 후, 해당 채팅방에 고객과 기사가 연결됨
  // 배달 완료 후 expirationTime 이후에 채팅방이 자동으로 제거되어야 함

  addChatMessage(chatRoomId: string, message: string) {
    if (!this.chatMessages.has(chatRoomId)) {
      this.chatMessages.set(chatRoomId, { messages: [] });
    }
    this.chatMessages.get(chatRoomId).messages.push(message);
  }

  getChatMessages(chatRoomId: string) {
    return this.chatMessages.get(chatRoomId)?.messages || [];
  }

  removeChatRoom(cid: string, did: string) {
    const chatRoomId = `${cid}-${did}`;
    try {
      this.chatRooms.delete(chatRoomId);
    } catch (err) {
      this.logger.log(`Failed to destroy chatroom. ${err}`);
      throw new BadRequestException(`Failed to destroy ChatRoom`);
    }
    this.logger.log(`ChatRoom destroyed`);
  }
  // TODO: 추후에 배달 기능 구현 후 해당 부분 수정 필요
  // 채팅방을 제거하는 시점은 배달 완료 후 expirationTime 이후임

  getAllChatRooms() {
    try {
      //return this.chatRooms.keys;
      return Array.from(this.chatRooms.keys());
    } catch (err) {
      this.logger.log(`An error ocurred while getting chatrroms info`);
      throw new BadRequestException(`An error ocurred while getting chatrroms info`);
    }
    this.logger.log(`Successfully fetched chatroom info`);
  }
}
