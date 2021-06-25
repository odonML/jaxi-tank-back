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
            await newUser.save();
            return true;    
        },
        deleteUser: async (_, {_id}) =>{
            await User.findByIdAndDelete(_id);
            return true;
        },
        updateUser: async (_, {_id, input}) =>{
            await User.findByIdAndUpdate(_id,input,{new: true});
            return true;
        },

        createTask: async (_,{input}) => {
            const newTask = new Task(input);
            await newTask.save();
            return true;
        },
        deleteTask: async (_, {_id}) =>{
            await Task.findByIdAndDelete(_id);
            return true;
        },
        updateTask: async(_, {_id, input}) => {
            await Task.findByIdAndUpdate(_id, input, {new: true});
            return true; 
        }
    }
}