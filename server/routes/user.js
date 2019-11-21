const router = require("express").Router()
const config = require("../connection")
const connection = config.connection

// get user by id
router.get("/:id", (req, res) => {
    var id = req.params.id
    const GET_USERNAME = `SELECT FName,LName FROM SMUSER WHERE UserId="${id}"`
    console.log(GET_USERNAME)
    connection.query(GET_USERNAME, (err, data) => {
        if(data) {
            res.send(data[0])
        } else {
            console.log(err)
        }
    })
})

router.get("/vendor/:email", (req, res) => {
    var email = req.params.email
    const GET_USERID = `SELECT UserId FROM VENDOR WHERE Email="${email}"`
    console.log(GET_USERID)
    connection.query(GET_USERID, (err, data) => {
        if(data) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})

router.get("/customer/:email", (req, res) => {
    var email = req.params.email
    const GET_USERID = `SELECT UserId FROM CUSTOMER WHERE Email="${email}"`
    console.log(GET_USERID)
    connection.query(GET_USERID, (err, data) => {
        if(data) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})


module.exports = router