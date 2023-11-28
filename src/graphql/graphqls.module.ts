import { Module } from '@nestjs/common';
import { GraphqlsService } from './restaurant/graphqls.service';
import { GraphqlsResolver } from './restaurant/graphqls.resolver';
// import { StudentResolver } from './student.resolver';
// import { StudentModule } from '../apis/student/student.module';

@Module({
  providers: [
    GraphqlsResolver,
    GraphqlsService,
    // StudentResolver,
  ],
  // imports: [StudentModule],
})
export class GraphqlsModule {}
