import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Query{
        hello: String
    }
    type Task{
        _id: ID
        title: String
        description: String
    }
    type Mutation{
        createTask(input: TaskInput): Task
    }
    input TaskInput{
        title: String!
        description: String
    }
`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});