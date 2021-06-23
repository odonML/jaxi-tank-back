import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Query{
        users:[User]
        tasks: [Task]
    }
    type User{
        _id: ID
        name: String
        age: Int
        celphone: Float
    }
    type Task{
        _id: ID
        title: String
        description: String
    }
    type Mutation{
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        
        createTask(input: TaskInput): Task
        deleteTask(_id: ID): Task
        updateTask(_id: ID, input: TaskInput): Task

    }
    input TaskInput{
        title: String!
        description: String
    }
    input UserInput{
        name: String!
        age: Int
        celphone: Float
    }
`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});