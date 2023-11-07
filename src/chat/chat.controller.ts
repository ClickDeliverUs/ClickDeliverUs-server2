import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  // Send all chatRoom informations to Cli
  @Get()
  getAllChatRooms() {
    return this.chatService.getAllChatRooms();
  }

  @Post('create-room')
  createChatRoom(@Body() createRoomDto: CreateRoomDto) {
    const { cid, did } = createRoomDto;
    this.chatService.createChatRoom(cid, did);
  }
}
