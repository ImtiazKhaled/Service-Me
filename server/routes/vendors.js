const router = require('express').Router()
const config = require('../connection')
const connection = config.connection

// get all vendors
router.get('/', (req, res) => {
    const GET_ALL_VENDORS = 'SELECT * FROM VENDOR NATURAL JOIN SMUSER'
    console.log(GET_ALL_VENDORS)
    connection.query(GET_ALL_VENDORS, (err, data) => {
        if(data) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})

module.exports = router