import mongoose, { ObjectId } from "mongoose";


const categories = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }

}, { timestamps: true })

export default mongoose.model("categories", categories);