const express = require('express');
const route = express.Router();
const Product = require('../models/product.model')

products = [
  {
    _id: "g100",
    name: "Magnam Tiste",
    slug: "magnam-tiste",
    price: 5.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "../../assets/imgs/menu/menu-item-1.png"
  },
  {
    _id: "g101",
    name: "Aut Luia",
    slug: "aut-luia",
    price: 14.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "../../assets/imgs/menu/menu-item-2.png"
  },
  {
    _id: "g102",
    name: "Est Eligendi",
    slug: "est-eligendi",
    price: 8.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "assets/img/menu/menu-item-3.png"
  },
  {
    _id: "g103",
    name: "Eos Luibusdam",
    slug: "aut-luia",
    price: 12.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "../../assets/imgs/menu/menu-item-4.png"
  },
  {
    _id: "g104",
    name: "Eos Luibusdam",
    slug: "magnam-tiste",
    price: 12.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "../../assets/imgs/menu/menu-item-5.png"
  },
  {
    _id: "g101",
    name: "Aut Luia",
    slug: "aut-luia",
    price: 14.95,
    discount: 0,
    short_description: "Lorem, deren, trataro, filede, nerada",
    long_description: "",
    image: "../../assets/imgs/menu/menu-item-6.png"
  }
];

//get
route.get("/products", (req, res) => {
  Product.find().then((products) => {
    console.log(products);
    res.status(200).json(products);
  })
});

//post
route.post('/', async (req, res) => {

  const product = Product.create(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (error) {
    Response.status(500).send(error);
  }

})


module.exports = route;
