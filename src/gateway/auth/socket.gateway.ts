// import {
//   // SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
// } from '@nestjs/websockets';
// // import { Logger } from '@nestjs/common';
// import { Server, Socket } from 'socket.io';

// @WebSocketGateway({
//   namespace: '/alert',
//   cors: true,
// })
// export class SocketGateway {
//   @WebSocketServer() wss: Server;
//   // private logger: Logger = new Logger('RealtimeGateway');

//   afterInit(server: Server) {
//     // this.logger.log('Initialized AlertGateway!');
//   }
//   handleConnection(client: Socket, ...args: any[]) {
//     // this.logger.log(`Client connected: ${client.id} AlertGateway`);
//   }
//   handleDisconnect(client: Socket) {
//     // this.logger.log(`Client disconnecting: ${client.id} AlertGateway`);
//   }

//   // @SubscribeMessage('alertToServer')
//   sendToAll(message: string): void {
//     this.wss.emit('alertToClient', { type: 'Alert', message });
//   }
// }
