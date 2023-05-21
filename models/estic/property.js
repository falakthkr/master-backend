const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    name: String,
    location: String,
    price: String,
    exterior_amenities: [
      {
        type: String,
      },
    ],
    description: String,
    rera_no: String,
    images: [
        {
            type: String
        }
    ],
    site: URL
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Property", propertySchema);
