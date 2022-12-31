const Product = require("../Models/products");

const getAllProducts = async (req, res) => {

    // destructuring the req.query object
    const { featured, company, name, sort } = req.query;

    const queryObj = {};

    if (featured) {
        queryObj.featured = featured === "true" ? true : false
    }
    if (company) {
        queryObj.company = company;
    }
    
    // this will give all the prodcuts that has name
    if(name)
    {
        queryObj.name = {$regex: name, $options: "i"};
    }
    console.log(queryObj);
    let result = Product.find(queryObj);
    if(sort)
    {
        let sortList = sort.split(',').join(" ");
        result = result.sort(sortList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10
    const skip = (page-1)*limit;

    result = result.skip(skip).limit(limit);
    const products = await result;
    res.json({ products, nbHits: products.length });

    
}
const getAllProductsStatic = async (req, res) => {
    await res.json({ msg: "testing the products", success: true })
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}