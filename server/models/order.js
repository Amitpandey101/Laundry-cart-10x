const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productType: { type: String },
  quantity: { type: Number, default: 0 },
  washing: { type: Boolean, default: false },
  ironing: { type: Boolean, default: false },
  drywash: { type: Boolean, default: false },
  chemicalwash: { type: Boolean, default: false }
});  
const OrderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalPrice: { type: String},
  totalItems: { type: String },
  status: { type: String },
  products: { type: Array, default: []  },
  user: { type: String }
});

const OrderData = new mongoose.model('LaundryUserOrders' , OrderSchema)

module.exports = OrderData;