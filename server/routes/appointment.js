const app = require("express")
const router  = app.Router()
const config = require("../connection")
const connection = config.connection


// get all other users messaged by user
router.get("/:id", (req, res) => {
    var id = req.params.id
    const retObj = []
    const GET_MESSAGES_BETWEEN = `SELECT * FROM MESSAGESBETWEEN, SMUSER WHERE Messagee=UserId AND Messager="${id}"`
    console.log(GET_MESSAGES_BETWEEN)
    connection.query(GET_MESSAGES_BETWEEN, (err, data) => {
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

module.exports = router