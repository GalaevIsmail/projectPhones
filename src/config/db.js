import mongoose from "mongoose";

export default async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/phones");
        console.log("MogoDB успешно подключен");
        
    }catch(err){
        console.log("Ошибка при подключении к MogoDB", err.message);
        process.exit(1);
    }
}