const Shoe = require('../models/Shoe');


exports.getShoes = async (req, res) => {
    const shoes = await Shoe.find();
    res.json(shoes)
};

exports.addShoe = async (req, res) => {
    const shoe = await Shoe.create(req.body);
    res.json (shoe)

};


exports.viewShoe = async(req, res) => {
    const shoe = await Shoe.findById(req.params.id);
    res.json(shoe)
};

exports.updateShoe = async (req,res)=>{
    const shoe = await Shoe.findByIdAndUpdate(req.params.id,req.body);
    res.json(shoe)
}
exports.deleteShoe =async (req,res)=>{
    await Shoe.findByIdAndDelete(req.params.id,req.body);
    res.json('deleted')
}