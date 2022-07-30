const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Shirts:{ type: Array },
    Tshirts:{ type: Array },
    Trousers:{ type: Array },
    Jeans:{ type: Array },
    Boxers:{ type: Array },
    Joggers:{ type: Array },
    Others:{ type: Array },
    user:{ type:String, required:true}
})

const OrderData = new mongoose.model('LaundryUserOrders' , OrderSchema)

module.exports = OrderData;