import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    cargo: String,
    celphone: Number,
    img: String
})

export default model("User", userSchema);