const router = require("express").Router()
const config = require("../connection")
const connection = config.connection

// get customer by email
router.get("/:email", (req, res) => { 
    var email = req.params.email
    const CHECK_CUSTOMER = `SELECT * FROM SMUSER NATURAL JOIN CUSTOMER WHERE Email="${email}"`
    console.log(CHECK_CUSTOMER)
    connection.query(CHECK_CUSTOMER, (err, data) => {
        if(data) {
            if(data.length)
                res.send(data[0])
            else
                res.send({res:"empty"})
        } else {
            console.log(err)
        }
    })
})

// add a new customer
router.post("/", (req, res) => {
    
    var today = new Date()
    const CreatedAt = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
    var dd = today.getDate()
    var mm = today.getMonth()+1
    var rand = Math.floor(Math.random() * 100)  
    if(dd<10)   dd="0"+dd
    if(mm<10)   mm="0"+mm
    if(rand<10) rand="0"+rand
    var today = mm+""+dd+""+rand
    const UserId = req.body.FName.charAt(0) + req.body.LName.charAt(0) + today
    var SendAt = new Date().getTime()
    var OrderId =  req.body.FName + req.body.LName + UserId + SendAt
    const MessageId = UserId + UserId + SendAt
    
    const ADD_USER = `INSERT INTO SMUSER VALUES("${UserId}","${req.body.FName}","${req.body.LName}","${CreatedAt}","${req.body.ProfilePicture}")`
    const ADD_VENDOR = `INSERT INTO CUSTOMER VALUES("${UserId}","${req.body.Email}","${req.body.Phone}")`
    const ADD_CHAT = `INSERT INTO MESSAGESBETWEEN VALUES("${UserId}","${UserId}")`
    const ADD_MESSAGE = `INSERT INTO MESSAGES VALUES("${MessageId}","${UserId}","${UserId}","${"yes"}","${"yes"}")`
    const ADD_ORDER = `INSERT INTO GENERATEDORDER VALUES("${OrderId}","${req.body.FName}","${req.body.LName}","${req.body.Email}","${req.body.Phone}","${UserId}","${0}","${0.00}","N/A","${SendAt}","N/A","${req.body.FName}",${null})`
    
    console.log(ADD_USER+"\n"+ ADD_VENDOR+"\n"+ADD_CHAT+"\n"+ADD_MESSAGE+"\n"+ADD_ORDER)

    connection.query(ADD_USER, (err, data) => {
        if(err) {
            console.log(err)
            res.send("error")
        }
    })

    connection.query(ADD_VENDOR, (err, data) => {
        if(err) {
            console.log(err)
            res.send("error")
        }
    })

    connection.query(ADD_CHAT, (err, data) => {
        if(err) {
            console.log(err)
            res.send("error")
        }
    })

    connection.query(ADD_MESSAGE, (err, data) => {
        if(err) {
            console.log(err)
            res.send("error")
        }
    })

    connection.query(ADD_ORDER, (err, data) => {
        if(err) {
            console.log(err)
            res.send("error")
        }
    })
    
    res.send("success")
    
})

module.exports = router
