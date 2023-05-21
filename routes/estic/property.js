const express = require("express");
const router = express.Router();
const {
  getPropertyDetails,
  getProperties,
  addProperty,
} = require("../../controllers/estic/propertyController");

router.get("/", getProperties);
router.get("/:id", getPropertyDetails);
router.post("/", addProperty);

module.exports = router;
