import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlsResolver } from './graphqls.resolver';
import { GraphqlsService } from './graphqls.service';

describe('GraphqlsResolver', () => {
  let resolver: GraphqlsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlsResolver, GraphqlsService],
    }).compile();

    resolver = module.get<GraphqlsResolver>(GraphqlsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
