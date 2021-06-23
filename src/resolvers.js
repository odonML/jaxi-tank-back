import Task from "./models/task"
export const resolvers = {
    Query: {
        tasks: async () =>{
            return await Task.find();
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