const app = require("express")
const router  = app.Router()
const config = require("../connection")
const connection = config.connection


// get all the orders the requested by the customer
router.get("/customer/:email", (req, res) => {
    var email = req.params.email
    const GET_ALL_ORDERS_CUSTOMER = `SELECT * FROM GENERATEDORDER WHERE CustomerEmail="${email}"`
    console.log(GET_ALL_ORDERS_CUSTOMER)
    connection.query(GET_ALL_ORDERS_CUSTOMER, (err, data) => {
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

// get all orders requested to the vendor
router.get("/vendor/:id", (req, res) => {
    var id = req.params.id
    const GET_ALL_ORDERS_VENDOR = `SELECT * FROM GENERATEDORDER WHERE VendorId="${id}"`
    console.log(GET_ALL_ORDERS_VENDOR)
    connection.query(GET_ALL_ORDERS_VENDOR, (err, data) => {
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

router.patch("/", (req, res) => {
    OrderId = req.body.OrderId
    OrderStatus = req.body.OrderStatus
    const UPDATE_ORDER_STATUS = `UPDATE GENERATEDORDER SET OrderStatus=${OrderStatus} WHERE OrderId=${OrderId}`
    connection.query(UPDATE_ORDER_STATUS, (err, data) => {
        if(data) {
            console.log(UPDATE_ORDER_STATUS)
            res.send({status: "success"})
        } else {
            console.log(err)
            res.send({status: "fail"})
        } 
    })
    res.send("success")
})

module.exports = router