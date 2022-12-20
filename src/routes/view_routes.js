import express from "express";
const router = express.Router();
import productMananger from "../managers/product_manager.js";
const productMananger=productMananger
export let data = await productMananger.getProducts();


router.get(`/`, async (req, res) => {
  res.render(`home`, {
    data,
    style:"staticList.css"
  });
});

router.get(`/realtimeproducts`, async (req, res) => {
  res.render(`realtimeProducts`, {
    style:"staticList.css"
  });
});
export default router;