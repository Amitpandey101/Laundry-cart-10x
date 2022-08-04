const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   productType: { type: String },
//   quantity: { type: Number, default: 0 },
//   washing: { type: Boolean, default: false },
//   ironing: { type: Boolean, default: false },
//   drywash: { type: Boolean, default: false },
//   chemicalwash: { type: Boolean, default: false }
// });
const OrderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  email:{type:String, required:true},
  order:{type:Array},
  Subtotal:{type:Number},
  Total:{type:Number},
  totalItem:{type:Number}
});

const OrderData = new mongoose.model('LaundryUserOrders' , OrderSchema)

module.exports = OrderData;