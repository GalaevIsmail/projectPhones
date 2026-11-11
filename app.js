import express from "express"
import path from "path"
import fileUpload from "express-fileupload"


import  connectDB  from "./src/config/db.js" 

const app = express()
connectDB()

app.use(express.json())

const PORT = 5000

app.listen(PORT , ()=>{
    console.log("Сервер успешно запущен на порту " + PORT);
    
})