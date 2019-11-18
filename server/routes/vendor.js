const router = require("express").Router()
const config = require("../connection")
const connection = config.connection

// get vendor by id
router.get("/:id", (req, res) => {
    var id = req.params.id
    const GET_VENDOR = `SELECT * FROM SMUSER NATURAL JOIN VENDOR WHERE UserId="${id}"`
    console.log(GET_VENDOR)
    connection.query(GET_VENDOR, (err, data) => {
        if(data) {
            if(data.length)
                res.send(data[0])
            else
                res.send("That user does not exist")
        } else {
            console.log(err)
        }
    })
})

// add a new vendor
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
    
    const ADD_USER = `INSERT INTO SMUSER VALUES("${UserId}","${req.body.FName}","${req.body.LName}","${CreatedAt}","${null}")`
    const ADD_VENDOR = `INSERT INTO VENDOR VALUES("${UserId}","${req.body.ServiceOffered}","${req.body.Rating}")`
    console.log(ADD_USER+"\n"+ ADD_VENDOR)

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

    res.send("success")
    
})

module.exports = router