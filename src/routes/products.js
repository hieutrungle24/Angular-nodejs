import { Router } from "express";
import { create, edit, getOne, list, remove } from "../controllers/products";


const router = Router();

router.post("/products", create);
router.get("/products", list);
router.get("/products/:id", getOne);
router.delete("/products/:id", remove);
router.put("/products/:id", edit);



export default router;