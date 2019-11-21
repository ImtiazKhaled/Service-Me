const app = require("express")
const router  = app.Router()
const config = require("../connection")
const connection = config.connection


// get all other users messaged by user
router.get("/customer/:email", (req, res) => {
    var email = req.params.email
    const GET_ALL_ORDERS = `SELECT * FROM GENERATEDORDER WHERE CustomerEmail="${email}"`
    console.log(GET_ALL_ORDERS)
    connection.query(GET_ALL_ORDERS, (err, data) => {
        if(data) {
            if(data.length>0) {
                res.send(data)
            } else {
                res.send({res:"empty"})
            }
        } else {
            console.log(err)
        }
    })
})


// add a new order
router.post("/", (req, res) => {
    var OrderId =  req.body.CustomerFName[0] + req.body.CustomerLName[0] + req.body.VendorId + req.body.ServiceDate
    const ADD_ORDER = `INSERT INTO GENERATEDORDER VALUES("${OrderId}","${req.body.CustomerFName}","${req.body.CustomerLName}","${req.body.CustomerEmail}","${req.body.CustomerPhone}","${req.body.VendorId}","${req.body.EstimatedTime}","${req.body.TotalCost}","Pending","${req.body.ServiceDate}","${req.body.ServiceType}","${req.body.ServicerName}",${null})`
    connection.query(ADD_ORDER, (err, data) => {
        if(data) {
            console.log(ADD_ORDER)
        } else {
            console.log(err)
        } 
    })
    res.send("success")
})

module.exports = router