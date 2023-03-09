import express from "express";
import Router from "/index.js";
import Container from "../module/container.js";
import { isAdmin } from "../controllers/generalValidations.js";
import { getProducts, postProducts, putProducts, deleteProducts } from "../controllers/products/productsHandlers.js";

import { validId, existsProduct } from "../controllers/products/productsValidations.js";

const { Router } = express;
const prodRouter = Router();

export const prodContainer = new Container("./data/products.txt");

prodRouter.get("/:id?", validId, getProducts);

prodRouter.post("/", isAdmin , postProducts);

prodRouter.put("/:id", isAdmin, existsProduct, putProducts);

prodRouter.delete("/:id", isAdmin, existsProduct, deleteProducts);

export default prodRouter;
