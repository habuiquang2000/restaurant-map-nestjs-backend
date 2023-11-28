import { Injectable } from '@nestjs/common';
import { CreateMapDto } from '../../models/map/dto/create-realtime.dto';
import { UpdateMapDto } from '../../models/map/dto/update-realtime.dto';

@Injectable()
export class MapService {
  create(createRealtimeDto: CreateMapDto) {
    return 'This action adds a new realtime';
  }

  findAll() {
    return `This action returns all realtime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realtime`;
  }

  update(id: number, updateRealtimeDto: UpdateMapDto) {
    return `This action updates a #${id} realtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} realtime`;
  }
}
