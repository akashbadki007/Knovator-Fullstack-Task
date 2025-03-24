const Product = require("../models/Product");
const products = require("../data/products");

exports.getProducts = async (req, res) => {

    try{
        const productList = await Product.find();
        if (productList.length === 0) return res.json(products);
        res.status(200).json(productList);

    } catch(error) {
        res.status(500).json({ message: "Error fetching products" });
    }
    
}