import { Injectable } from '@nestjs/common';
import { CreateGraphqlInput } from '../../models/customer/dto/create-graphql.input';
import { UpdateGraphqlInput } from '../../models/customer/dto/update-graphql.input';

@Injectable()
export class GraphqlsService {
  create(createGraphqlInput: CreateGraphqlInput) {
    return 'This action adds a new graphql';
  }

  async findAll(): Promise<string> {
    return `This action returns all graphqls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphql`;
  }

  update(id: number, updateGraphqlInput: UpdateGraphqlInput) {
    return `This action updates a #${id} graphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphql`;
  }
}
