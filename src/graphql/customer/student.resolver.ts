// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { GraphqlsService } from './graphqls.service';
// import { Graphql } from './entities/graphql.entity';
// // import { CreateGraphqlInput } from './dto/create-graphql.input';
// import { UpdateGraphqlInput } from './dto/update-graphql.input';
// // import { StudentService } from '../apis/student/student.service';
// // import { Student } from '../apis/student/schemas/student.schema';

// class R {
//   // success?: boolean;
//   // count?: number;
//   // data?: Student[];
//   // error?: undefined;
// }

// @Resolver('Student')
// export class StudentResolver {
//   constructor(
//     private readonly graphqlsService: GraphqlsService,
//     private readonly studentService: StudentService,
//   ) {}

//   @Query((returns) => Boolean)
//   async findAllStudent(): Promise<Boolean> {
//     // return R;
//     return true;
//     // return this.studentService.findAll();
//   }

//   @Query(() => Graphql, { name: 'graphql' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.graphqlsService.findOne(id);
//   }

//   @Mutation(() => Graphql)
//   createGraphql(
//     @Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput,
//   ) {
//     return this.graphqlsService.create(createGraphqlInput);
//   }

//   @Mutation(() => Graphql)
//   updateGraphql(
//     @Args('updateGraphqlInput') updateGraphqlInput: UpdateGraphqlInput,
//   ) {
//     return this.graphqlsService.update(
//       updateGraphqlInput.id,
//       updateGraphqlInput,
//     );
//   }

//   @Mutation(() => Graphql)
//   removeGraphql(@Args('id', { type: () => Int }) id: number) {
//     return this.graphqlsService.remove(id);
//   }
// }
