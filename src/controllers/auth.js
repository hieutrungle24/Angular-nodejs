import Users from "../modules/users";
import jwt from "jsonwebtoken";

export const signup = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const checkEmail = await Users.findOne({ email }).exec();
        if (checkEmail) {
            return res.status(400).json({
                message: "Tài khoản này đã tồn tại, vui lòng đăng ký tài khoản khác !"
            })
        }
        const user = await Users({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                password: user.password
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: "Không tạo được tài khoản !"
        })
    }
}

export const signin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại, vui lòng đăng nhập lại !"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Mật khẩu không đúng, vui lòng đăng nhập lại !"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
        return res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: "Không đăng nhập được !"
        })
    }
}