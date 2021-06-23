import mongoose from "mongoose";

const dblink = "mongodb+srv://jaxi_tank_back:jaxitankdb01@cluster0.y1aaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export async function connect(){
    try{
        await mongoose.connect(dblink,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(">>> DB conecct");
    }catch(e) {
        console.log(`error on connection ${e}`);
    }
}