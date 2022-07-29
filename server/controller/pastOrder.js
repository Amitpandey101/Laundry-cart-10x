

app.get("/post", (req, res)=> {
    if(req.headers.authorization) {
        try {
          const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
          laundryModel.find({user: email}).then((orders)=> {
              res.status(200).send(orders);
          })
        } catch(err) {
          res.status(403).send("User Not Authorized")
        }
      } else {
          res.status(400).send("Missing Authorization token")
      }
});



