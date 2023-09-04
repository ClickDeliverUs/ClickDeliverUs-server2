import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  // Send all chatRoom informations to Cli
  @Get()
  getAllChatRooms() {
    return this.chatService.getAllChatRooms();
  }
}
