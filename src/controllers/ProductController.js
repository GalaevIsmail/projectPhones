
import Product from "../models/Product.js";


class ProductController {

    async GetAll(req, res){
        try{

            const products = await Product.find()
            res.status(200).json(products)

            
        }catch(err){
            res.status(404).json("Ошибка при получении товаров:" + err)
            
        }
    }
    async Create(req , res) {
        try {
            const { brand,description,price,quantity,storage,color, screen,camera,battert,os,cpu,ram } = req.body
            const product = await Product.create({brand,description,price,quantity,storage,color,
                specs:{screen,camera,battert,os,cpu,ram}
            })
            res.status(200).json(product)
        } catch (err) {
            res.status(400).json("ошИБКА ПРИ СОЗДАНИИ ТОВАРА:" , + err)
        }
    }

    async DELETE(req,res){
        try{
            const {id} = req.params
            const product = await Product.findOneAndDelete(id)
            if(!product){
                res.status(404).json("Такого товара  не существует!");
            }
            res.status(200).json("Товар  успешно удален!");
        }catch(err){
            res.status(500).json("Ошибка при выполнении запроса: " + err);
        }
    }

    async updateProduct(req,res){
        try{
            const { id } = req.params;
            const {brand,description,price, } = req.body
            const updateProduct = await Product.findByIdAndUpdate(id , {
                brand,description,price    
            } , {new:true})
        }catch(err){
            
        }
    }
}

export default new ProductController()