const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: false},
    short_description: { type: String, required: true },
    long_description: { type: String, required: false },
    image: {type: String, required:false}
  }
)

module.exports = mongoose.model('Product', productSchema);
