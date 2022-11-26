import { Router } from "express";
import {getProduct,createProduct,getProductById,updateProductById,deleteProductById} from '../controllers/products.controllers.js'

const router = Router();

router.post('/',createProduct)
router.get('/',getProduct)
router.get('/:productId',getProductById)
router.put('/:productId',updateProductById)
router.delete('/:productId',deleteProductById)



export default router;