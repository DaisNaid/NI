import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from '../data.js';
import Product from "../models/productModel.js";
import User from '../models/userModel.js';
import { isAdmin, isAuth } from '../utils.js';

const ProductRouter = express.Router();

ProductRouter.get('/', expressAsyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

ProductRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    //Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));

ProductRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else{
        res.status(404).send({message: 'Product Not Found'});
    }
}));

ProductRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = new Product({
        name: 'Sample Name ' + Date.now(),
        image: '/images/p1.jpg',
        price: 0,
        countInStock: 0,
        rating: 0,
        description: 'Sample Description',
      });
      const createdProduct = await product.save();
      res.send({ message: 'Product Created', product: createdProduct });
    })
);

ProductRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const productID = req.params.id;
      const product = await Product.findById(productID);
      if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.countInStock = req.body.countInStock;
        product.rating = req.body.rating;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
);

ProductRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Product Deleted', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
);

  

export default ProductRouter;