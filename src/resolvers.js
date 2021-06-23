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
        },
        deleteTask: async (_, {_id}) =>{
            return await Task.findByIdAndDelete(_id);
        },
        updateTask: async(_, {_id, input}) => {
            return await Task.findByIdAndUpdate(_id, input, {new: true});
        }
    }
}