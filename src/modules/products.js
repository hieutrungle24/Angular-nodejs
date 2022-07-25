import mongoose, { ObjectId } from "mongoose";


const Products = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "category"
    },
    status: {
        type: Number,
        default: 1
    }

}, { timestamps: true })

export default mongoose.model("Product", Products);