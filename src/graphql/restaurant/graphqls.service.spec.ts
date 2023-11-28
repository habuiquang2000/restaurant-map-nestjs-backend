import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlsService } from './graphqls.service';

describe('GraphqlsService', () => {
  let service: GraphqlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlsService],
    }).compile();

    service = module.get<GraphqlsService>(GraphqlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
