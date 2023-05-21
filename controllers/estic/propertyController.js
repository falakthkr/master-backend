const Property = require("../../models/estic/property")

const getProperties = (req,res) => {
    Property.find()
    .then((properties=>res.json(properties)))
    .catch((err)=>res.status(400).json("Error: "+err))
}

const getPropertyDetails = (req,res) => {
    Property.findById(req.params.id)
    .then((property)=>{
        res.json(property);
    })
    .then(()=>res.json("Fetched property data successfully"))
    .catch((err)=>res.status(400).json("Error: "+err))
}


module.exports = { getProperties, getPropertyDetails }