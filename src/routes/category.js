import { Router } from "express";
import { create, edit, getOne, list, remove, CategoriesDetails } from "../controllers/category";


const router = Router();

router.post("/categories", create);
router.get("/categories", list);
router.get("/categories/:id", getOne);
router.delete("/categories/:id", remove);
router.put("/categories/:id", edit);
router.get("/categoriesDetails/:id", CategoriesDetails);


export default router;