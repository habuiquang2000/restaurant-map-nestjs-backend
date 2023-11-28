import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  // MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace, Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: '/chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger: Logger = new Logger(ChatGateway.name);
  @WebSocketServer() wss: Server;
  @WebSocketServer() io: Namespace;
  afterInit(server: Server): void {
    this.logger.log(`Initialized ChatGateway ${server._checkNamespace}`);
  }
  handleConnection(client: Socket, ...args: any[]): void {
    args;
    const sockets = this.io.sockets;
    this.logger.log(`Client connected: ${client.id} ChatGateway`);
    this.logger.debug(
      `Number of connected sockets: ${sockets.size} ChatGateway`,
    );
    this.io.emit(`hello`, `from ${client.id}`);
  }
  handleDisconnect(client: Socket): void {
    const sockets = this.io.sockets;
    this.logger.log(`Client disconnecting: ${client.id} ChatGateway`);
    this.logger.debug(
      `Number of connected sockets: ${sockets.size} ChatGateway`,
    );
  }
  @SubscribeMessage('msgToServer')
  handleMessageVoid(
    client: Socket,
    // message: { sender: string, message: string },
    message: { sender: string; room: string; message: string },
  ): void {
    // this.wss.emit('msgToClient', message);
    this.wss.to(message.room).emit('msgToClient', message);
  }
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string): void {
    client.join(room);
    client.emit('joinerRoom', room);
  }
  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client: Socket, room: string): void {
    client.leave(room);
    client.emit('leaveRoom', room);
  }
}
