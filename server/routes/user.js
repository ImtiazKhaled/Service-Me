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
            res.send(data)
        } else {
            console.log(err)
        }
    })
})


module.exports = router