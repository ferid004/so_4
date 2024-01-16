import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors())


const proSchema = new mongoose.Schema({
    name: String,
    src:String,
    info:String,
  });

  const Product = mongoose.model('prduct017', proSchema);
const port = 3000

app.get('/', async(req, res) => {
    try {
        const data=await Product.find({})
        res.status(200).send({message:"succses",data})
    } catch (error) {
        res.status(500).send({message:"NOT succses",error})
    }
})
app.post('/', async(req, res) => {
    try {
        const data=new Product(req.body)
        await data.save()
        res.status(200).send({message:"succses",data})
    } catch (error) {
        res.status(500).send({message:"NOT succses",error})
    }
})
app.get('/:id', async(req, res) => {
    try {
        const {id}=req.params
        const data=await Product.findById(id)
        res.status(200).send({message:"succses",data})
    } catch (error) {
        res.status(500).send({message:"NOT succses",error})
    }
})
app.delete('/:id', async(req, res) => {
    try {
        const {id}=req.params
        const data=await Product.findByIdAndDelete(id)
        res.status(200).send({message:"succses",data})
    } catch (error) {
        res.status(500).send({message:"NOT succses",error})
    }
})


mongoose.connect('mongodb+srv://feridd:feridd@cluster0.o4zo8na.mongodb.net/')
.then(()=>console.log('DB connet'))
.catch(()=>console.log("NOT connet"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})