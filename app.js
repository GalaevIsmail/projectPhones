import express from "express"
import path from "path"
import fileUpload from "express-fileupload"

import productRoutes from "./src/routes/productRoutes.js"

import  connectDB  from "./src/config/db.js" 

const app = express()
connectDB()

app.use(express.json())
app.use("/api/product", productRoutes)


const PORT = 5000

app.listen(PORT , ()=>{
    console.log("Сервер успешно запущен на порту " + PORT);
    
})