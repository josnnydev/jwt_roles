import express from 'express'
import morgan from 'morgan';
import productRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import './database/database.js'

import {createRoles} from './libs/initialSetup.js'

const app = express();
createRoles();

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

 //Routes

 app.use('/api/products',productRoutes)
 app.use('/api/auth',authRoutes)

export default app;