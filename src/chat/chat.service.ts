import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private chatRooms: Map<string, { expirationTime: Date }> = new Map();

  createChatRoom(cid: string, did: string) {
    const chatRoomId = `${cid}-${did}`;
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 3);

    this.chatRooms.set(chatRoomId, { expirationTime });
  }
  // TODO: 추후에 배달 기능 구현 후 해당 부분 수정 필요
  // 채팅방을 생성한 후, 해당 채팅방에 고객과 기사가 연결됨
  // 배달 완료 후 expirationTime 이후에 채팅방이 자동으로 제거되어야 함

  removeChatRoom(cid: string, did: string) {
    const chatRoomId = `${cid}-${did}`;
    this.chatRooms.delete(chatRoomId);
  }
  // TODO: 추후에 배달 기능 구현 후 해당 부분 수정 필요
  // 채팅방을 제거하는 시점은 배달 완료 후 expirationTime 이후임

  getAllChatRooms() {
    return this.chatRooms;
  }
}
