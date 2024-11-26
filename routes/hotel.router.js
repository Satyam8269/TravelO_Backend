const express = require("express");
const getAllHotelHandler = require("../controllers/hotelController");

const router = express.Router();


router.route("/").get( getAllHotelHandler );

module.exports = router;
