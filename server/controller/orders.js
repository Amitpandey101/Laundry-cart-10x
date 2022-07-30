const jwt = require("jsonwebtoken");

const OrderData = require("../models/order");

const deleteorder = async (req, res) => {
  if (req.headers.authorization) {
    try {
      const  email  = jwt.verify( req.headers.authorization,process.env.SECRET_KEY)
// console.log(email)
console.log(req.params)
      OrderData.find({ email: email }).then((order) => {
        // console.log(order)
        if (order) {
            // console.log(order[0].user)
            // console.log(req.params)
          if (email) {
            console.log(req.params)
            OrderData.deleteOne({ _id: req.params._id })
              .then(() => {
                res.status(200).send({ Status: "Success" });
              });
          } else {
            res.status(400).send("Unauthorized user to delete order");
          }
        } else {
          res.status(400).send("order does not exist");
        }
      });
    } catch (err) {
      res.send("unauthorized User");
    }
  }else{
    res.status(400).send("Missing Authorization token")
  }
};

module.exports = deleteorder;
