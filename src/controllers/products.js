import Products from "../modules/products";

export const create = async (req,res) =>{
    try {
        const products = await new Products(req.body).save();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            message:"Không thêm được sản phẩm !"
        })
    }
}
export const list = async(req,res) =>{
    try {
        const products = await Products.find({}).exec();
        res.json(products)
    } catch (error) {
        return res.status(400).json({
            message:"Không lấy được sản phẩm !"
        })
    }
}

export const getOne = async(req,res) =>{
    try {
        const products = await Products.findOne({_id:req.params.id}).exec();
        res.json(products)
    } catch (error) {
        return res.status(400).json({
            message:"Không lấy được sản phẩm !"
        })
    }
}

export const remove = async(req,res) =>{
    try {
        const products = await Products.findOneAndDelete({_id:req.params.id}).exec();
        res.json(products)
    } catch (error) {
        return res.status(400).json({
            message:"Không xóa được sản phẩm !"
        })
    }
}
export const edit = async(req,res) =>{
    try {
        const products = await Products.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec();
        res.json(products)
    } catch (error) {
        return res.status(400).json({
            message:"Không sửa được sản phẩm !"
        })
    }
}