import Task from "./models/task"
export const resolvers = {
    Query: {
        hello: () => {
            return 'hola';
        }
    },
    Mutation: {
        createTask: async (_,{input}) => {
            const newTask = new Task(input);
            await newTask.save();
            return newTask;
        }
    }
}