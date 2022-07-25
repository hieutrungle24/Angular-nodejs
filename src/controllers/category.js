import Categories from "../modules/category";
import Product from "../modules/products";

export const create = async(req, res) => {
    try {
        const categories = await new Categories(req.body).save();
        res.json(categories);
    } catch (error) {
        return res.status(400).json({
            message: "Không thêm được danh mục !"
        })
    }
}
export const list = async(req, res) => {
    try {
        const categories = await Categories.find({}).exec();
        res.json(categories)
    } catch (error) {
        return res.status(400).json({
            message: "Không lấy được danh mục !"
        })
    }
}

export const getOne = async(req, res) => {
    try {
        const categories = await Categories.findOne({ _id: req.params.id }).exec();
        res.json(categories)
    } catch (error) {
        return res.status(400).json({
            message: "Không lấy được danh mục !"
        })
    }
}

export const remove = async(req, res) => {
    try {
        const categories = await Categories.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(categories)
    } catch (error) {
        return res.status(400).json({
            message: "Không xóa được danh mục !"
        })
    }
}
export const edit = async(req, res) => {
    try {
        const categories = await Categories.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(categories)
    } catch (error) {
        return res.status(400).json({
            message: "Không sửa được danh mục !"
        })
    }
}
export const CategoriesDetails = async(req, res) => {
    try {
        const category = await Categories.findOne({ _id: req.params.id }).exec();
        const books = await Product.find({ category: category }).populate('category').select('-category').exec();
        res.json(books)
    } catch (error) {
        return res.status(400).json({
            message: "Không tìm thấy !"
        })
    }
}