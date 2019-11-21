// add a new order
router.post("/", (req, res) => {
    var OrderId =  req.body.CustomerFName[0] + req.body.CustomerLName[0] + req.body.VendorId + req.body.ServiceDate.getTime()
    const ADD_ORDER = `INSERT INTO GENERATEDORDER VALUES("${OrderId}","${req.body.CustomerFName}","${req.body.CustomerLName}","${req.body.CustomerEmail}","${req.body.CustomerPhone}","${req.body.VendorId}","${req.body.EstimatedTime}","${req.body.TotalCost}","Pending","${req.body.ServiceDate}",${null})`
    connection.query(ADD_ORDER, (err, data) => {
        if(data) {
            console.log(ADD_ORDER)
        } else {
            console.log(err)
        } 
    })
    res.send("success")
})
