import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { MapModule } from './map/map.module';

@Module({
  imports: [ChatModule, MapModule],
  exports: [ChatModule, MapModule],
})
export class SocketModule {}
