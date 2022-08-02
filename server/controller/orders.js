const jwt = require("jsonwebtoken");

const OrderData = require("../models/order");

const deleteorder = async (req, res) => {
  console.log(req.body.OrderData)

  // console.log(req.headers.authorization)
  if (req.headers.authorization) {
    try {
      const  email  = jwt.verify( req.headers.authorization,process.env.SECRET_KEY)
      OrderData.find({ email: email }).then((order) => {
        if (order) {
          if (email) {
            OrderData.deleteOne({ _id:req.body.data})
              .then(() => {
                OrderData.find({email:email}).then((rem)=>{
                  res.send({ Status: "Success",remorders:rem });
                })
                // res.status(200).send({ Status: "Success" });
                // res.send({ Status: "Success" });
              });
          } else {
            // res.status(400).send("Unauthorized user to delete order");
            res.send("Unauthorized user to delete order");
          }
        } else {
          // res.status(400).send("order does not exist");
          res.send("order does not exist");
        }
      });
    } catch (err) {
      res.send("unauthorized User");
    }
  }else{
    // res.status(400).send("Missing Authorization token")
    res.send("Missing Authorization token")
  }
};

module.exports = deleteorder;
