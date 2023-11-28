import { PartialType } from '@nestjs/mapped-types';
import { CreateMapDto } from './create-realtime.dto';

export class UpdateMapDto extends PartialType(CreateMapDto) {
  id: number;
}
