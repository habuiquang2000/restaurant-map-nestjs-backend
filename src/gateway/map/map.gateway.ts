import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  //   WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  ConnectedSocket,
} from '@nestjs/websockets';
import { MapService } from './map.service';
import { CreateMapDto } from '../../models/map/dto/create-realtime.dto';
import { UpdateMapDto } from '../../models/map/dto/update-realtime.dto';
import { Socket, Server } from 'socket.io';
import { OnGatewayDisconnect } from '@nestjs/websockets/interfaces/hooks';
import {
  //   getUserDeviceRoom,
  startTimerForUserDevice,
  stopTimerForUserDevice,
} from '../auth/rooms';
import { TimerEvents } from '../auth/events';

@WebSocketGateway({
  // serveClient: false,
  // pingInterval: 10000,
  // pingTimeout: 5000,
  // cookie: false,
  // cors: {
  //   origin: '*'
  // }
  cors: true,
})
// Change Socket Gateway
// @WebSocketGateway(4001, {
//   path: '/websocket',
// cors: true,
//   serveClient: true,
//   namespace: '/',
// })
export class MapGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(private readonly realtimeService: MapService) {}
  private logger: Logger = new Logger('RealtimeGateway');

  afterInit(server: Server) {
    this.logger.log(`Initialized RealtimeGateway ${server._checkNamespace}`);
    // throw new Error('Method not implemented.');
  }
  handleConnection(@ConnectedSocket() client: Socket | any, ...args: any[]) {
    args;
    this.logger.log(`Client connected: ${client.id} RealtimeGateway`);
    console.log(
      `user ${client.user.id} with socket ${client.id} connected with device ${client.handshake?.query?.deviceId}`,
    );

    client
      .join
      // getUserDeviceRoom(client.user.id, client.handshake.query.deviceId),
      ();
  }
  handleDisconnect(@ConnectedSocket() client: Socket | any) {
    // this.logger.log(`Client disconnecting: ${client.id} RealtimeGateway`);
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    // );

    client
      .leave
      // getUserDeviceRoom(client.user.id, client.handshake.query.deviceId),
      ();
  }

  @SubscribeMessage('createRealtime')
  create(@MessageBody() createRealtimeDto: CreateMapDto) {
    return this.realtimeService.create(createRealtimeDto);
  }

  @SubscribeMessage('findAllRealtime')
  findAll() {
    return this.realtimeService.findAll();
  }

  @SubscribeMessage('findOneRealtime')
  findOne(@MessageBody() id: number) {
    return this.realtimeService.findOne(id);
  }

  @SubscribeMessage('updateRealtime')
  update(@MessageBody() updateRealtimeDto: UpdateMapDto) {
    return this.realtimeService.update(updateRealtimeDto.id, updateRealtimeDto);
  }

  @SubscribeMessage('removeRealtime')
  remove(@MessageBody() id: number) {
    return this.realtimeService.remove(id);
  }

  @SubscribeMessage('getMapLocation')
  handleMessage(client: Socket, data: any): void {
    this.wss.emit('setMapLocation', data);
    // return { event: 'setMapLocation', data };
  }
  // Multiple Receive Client
  // handleMessageVoid(client: Socket, text: string): void {
  //   this.wss.emit('msgToClient', text);
  //   // client.emit('msgToClient', text);
  // }
  @SubscribeMessage(TimerEvents.timerStart.toString())
  startMyTimer(@ConnectedSocket() client: any, @MessageBody() body: any) {
    // Stop any existing timer for this user device.
    stopTimerForUserDevice(
      client.user.id,
      client.handshake.query.deviceId.toString(),
    );

    // Start a new timer for this user device.
    startTimerForUserDevice(
      this.wss,
      client.user.id,
      client.handshake.query.deviceId.toString(),
      body.dur, // Timer duration
    );
  }

  @SubscribeMessage(TimerEvents.timerStop.toString())
  stopMyTimer(@ConnectedSocket() client: any): void {
    // Stop current timer for this user device.
    stopTimerForUserDevice(
      client.user.id,
      client.handshake.query.deviceId.toString(),
    );
  }
}
