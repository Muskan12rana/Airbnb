const express = require("express");
const storeRouter = express.Router();
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/booking", storeController.getBooking);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/favourite-list", storeController.getFavouriteList);

module.exports = storeRouter;
