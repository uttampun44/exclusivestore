import express from 'express';
import products from '../products/product.js'

const router = express.Router();



router.get('/products', async(req, res) =>{

   try {
    if(res.status(200)){
        console.log(`fetching data`)
       res.json(products)
    }
   } catch (error) {
      res.status(500).json({message: 'Internal Server Error'})
   }
})

export default router