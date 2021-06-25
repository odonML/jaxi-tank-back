import mongoose from "mongoose";

const dblink = "mongodb://localhost/jaxi-tank";
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