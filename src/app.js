import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routerProducts from "./routes/products";
import routerCategories from "./routes/category";
import routerUsers from "./routes/users";
import routerAuth from "./routes/auth";
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/onTapNodejs")
    .then(() => console.log("Kết nối thành công !"));

app.use("/api", routerProducts);
app.use("/api", routerCategories);
app.use("/api", routerAuth);
app.use("/api", routerUsers);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server đang chạy cổng ${PORT}`);
})