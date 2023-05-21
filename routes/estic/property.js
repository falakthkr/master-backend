const express = require('express');
const router = express.Router();
const {getPropertyDetails, getProperties} = require("../../controllers/estic/propertyController");

router.get("/", getProperties);
router.get("/:id", getPropertyDetails);

module.exports = router;