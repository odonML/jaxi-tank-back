import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Query{
        users:[User]
        tasks: [Task]
    }
    type User{
        _id: String
        name: String
        cargo: String
        celphone: Float
        img: String
    }
    type Task{
        _id: String
        title: String
        description: String
    }
    type Mutation{
        createUser(input: UserInput): Boolean
        deleteUser(_id: String): Boolean
        updateUser(_id: String, input: UserInput): Boolean
        
        createTask(input: TaskInput): Boolean
        deleteTask(_id: String): Boolean
        updateTask(_id: String, input: TaskInput): Boolean

    }
    input TaskInput{
        title: String
        description: String
    }
    input UserInput{
        name: String
        cargo: String
        celphone: Float
        img: String
    }
`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});