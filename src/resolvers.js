import Task from "./models/task";
import User from "./models/user";
export const resolvers = {
    Query: {
        users: async () =>{
            return await User.find();
        },
        tasks: async () =>{
            return await Task.find();
        }
    },
    Mutation: {
        createUser: async (_, {input}) =>{
            const newUser = new User(input);
            return await newUser.save();
        },
        deleteUser: async (_, {_id}) =>{
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, {_id, input}) =>{
            return await User.findByIdAndUpdate(_id,input,{new: true});
        },

        createTask: async (_,{input}) => {
            const newTask = new Task(input);
            return await newTask.save();
        },
        deleteTask: async (_, {_id}) =>{
            return await Task.findByIdAndDelete(_id);
        },
        updateTask: async(_, {_id, input}) => {
            return await Task.findByIdAndUpdate(_id, input, {new: true});
        }
    }
}