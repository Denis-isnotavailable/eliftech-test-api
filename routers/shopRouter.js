const express = require('express');
const {
    getAllShops,
    addOrder,
    getAllOrders
} = require('../controller');

const shopRouter = express.Router();

shopRouter.get("/shop", getAllShops);
// shopRouter.post("/shop", addShop);
shopRouter.post("/order", addOrder);
shopRouter.get("/order", getAllOrders);

module.exports = shopRouter;

