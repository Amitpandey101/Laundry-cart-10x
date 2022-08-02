const jwt = require("jsonwebtoken");

const OrderData = require("../models/order");

const deleteorder = async (req, res) => {
  if (req.headers.authorization) {
    try {
      const  email  = jwt.verify( req.headers.authorization,process.env.SECRET_KEY)
      OrderData.find({ email: email }).then((order) => {
        if (order) {
          if (email) {
            OrderData.deleteOne({ _id: req.params._id })
              .then(() => {
                res.send({ Status: "Success" });
              });
          } else {
            res.send("Unauthorized user to delete order");
          }
        } else {
          Response.send("order does not exist");
        }
      });
    } catch (err) {
      res.send("unauthorized User");
    }
  }else{
    res.send("Missing Authorization token")
  }
};

module.exports = deleteorder;
