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

// get searched vendors by first or last name
// router.get('/:name', (req, res) => {
//     var name = req.params.name
//     const GET_SEARCHED_VENDORS = `SELECT * FROM VENDOR NATURAL JOIN SMUSER WHERE FName='${name}' OR LName='${name}`
//     console.log(GET_SEARCHED_VENDORS)
//     connection.query(GET_SEARCHED_VENDORS, (err, data) => {
//         if(data) {
//             res.send(data)
//         } else {
//             console.log(err)
//         }
//     })
// })

router.get('/:service', (req, res) => {
    var service = req.params.service
    const GET_SEARCHED_VENDORS = `SELECT * FROM VENDOR NATURAL JOIN SMUSER WHERE ServiceOffered='${service}'`
    console.log(GET_SEARCHED_VENDORS)
    connection.query(GET_SEARCHED_VENDORS, (err, data) => {
        if(data) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})


module.exports = router