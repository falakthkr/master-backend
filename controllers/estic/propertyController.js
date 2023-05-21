const Property = require("../../models/estic/property");

const getProperties = (req, res) => {
  Property.find()
    .then((properties) => res.json(properties))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getPropertyDetails = (req, res) => {
  Property.findById(req.params.id)
    .then((property) => {
      res.json(property);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const addProperty = (req, res) => {
  const {
    name,
    location,
    price,
    bedrooms,
    bathrooms,
    external_size,
    size,
    exterior_amenities,
    garden,
    reference,
    cooling_systems,
    description,
    rera_no,
    images,
  } = req.body;
  const newProperty = new Property({
    name,
    location,
    price,
    bedrooms,
    bathrooms,
    external_size,
    size,
    exterior_amenities,
    garden,
    reference,
    cooling_systems,
    description,
    rera_no,
    images,
  });

  newProperty
    .save()
    .then(() => res.json("Property added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getProperties, getPropertyDetails, addProperty };
