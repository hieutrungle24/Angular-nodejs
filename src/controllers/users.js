import UsersChema from "../modules/users";

export const getAllUser = async(req, res) => {
    try {
        const user = await UsersChema.find({}).exec();
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            message: "Không lấy được người dùng !"
        })
    }
}

export const removeUser = async(req, res) => {
    try {
        const user = await UsersChema.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            message: "Không xóa được người dùng !"
        })
    }
}

export const createUsers = async(req, res) => {
    try {
        const user = await new UsersChema(req.body).save();
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            message: "Không tạo được người dung !"
        })
    }
}