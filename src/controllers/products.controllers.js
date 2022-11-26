import Product from "../models/products.js";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({ name, category, price, imgURL });

  const productSave = await newProduct.save();
  res.json(productSave);
};

export const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById =async (req, res) => {
    const id = req.params.productId
   const response = await Product.findById(id)
  return res.json(response);
};

export const updateProductById = async(req, res) => {
    const id = req.params.productId
  const response = await Product.findByIdAndUpdate(id,req.body,{new: true})
  return res.json(response);
};

export const deleteProductById = async(req, res) => {
   const id = req.params.productId
   const response = await Product.findByIdAndDelete(id)
  return res.json(`id: ${id} deleted of database`);
};
