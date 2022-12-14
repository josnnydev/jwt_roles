import { Schema,model } from "mongoose";

const productSchema = new Schema({
    name: {type:String},
    category: {type:String},
    price: {type: Number},
    imgURL: {type: String}
},{
    timestamps: true,
    versionKey: false
})

export default model('Product',productSchema)