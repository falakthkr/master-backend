const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    name: String,
    location: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    external_size: String,
    size: String,
    exterior_amenities: [
      {
        type: String,
      },
    ],
    garden: String,
    reference: String,
    cooling_systems: [{ type: String }],
    description: String,
    rera_no: String,
    images: [
        {
            type: String
        }
    ]
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Property", propertySchema);
