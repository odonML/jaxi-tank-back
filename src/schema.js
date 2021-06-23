import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Query{
        tasks: [Task]
    }
    type Task{
        _id: ID
        title: String
        description: String
    }
    type Mutation{
        createTask(input: TaskInput): Task
        deleteTask(_id: ID): Task
        updateTask(_id: ID, input: TaskInput): Task
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