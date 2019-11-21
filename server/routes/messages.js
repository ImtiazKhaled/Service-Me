const router = require("express").Router()
const config = require("../connection")
const connection = config.connection

// get all other users messaged by user
router.get("/:id", (req, res) => {
    var id = req.params.id
    const res = []
    const GET_MESSAGES_BETWEEN_ONE = `SELECT * FROM MESSAGESBETWEEN JOIN SMUSER ON Messager!=UserId WHERE UserId="${id}" AND UserId=Messagee`
    const GET_MESSAGES_BETWEEN_TWO = `SELCET * FROM MESSAGESBETWEEN JOIN SMUSER ON Messagee!=UserId WHERE UserId="${id}" AND UserId=Messager`
    console.log(GET_MESSAGES_BETWEEN_ONE)
    console.log(GET_MESSAGES_BETWEEN_TWO)
    connection.query(GET_MESSAGES_BETWEEN, (err, data) => {
        if(data) {
            if(data.length>0)
                res = data
            else
                res.send({res:"empty"})
        } else {
            console.log(err)
        }
    })
})

// get all other users messaged by user
router.get("/:SenderId/:ReceiverId", (req, res) => {
    var SenderId = req.params.SenderId
    var ReceiverId = req.params.ReceiverId
    const GET_CHAT = `SELECT * FROM MESSAGES WHERE (Sender="${SenderId}" AND Receiver="${ReceiverId}") OR (Receiver="${SenderId}" AND Sender="${ReceiverId}") ORDER BY SendAt ASC`
    console.log(GET_CHAT)
    connection.query(GET_CHAT, (err, data) => {
        if(data) {
            if(data.length)
                res.send(data)
            else
                res.send({res:"empty"})
        } else {
            console.log(err)
        }
    })
})

// add a new message
router.post("/", (req, res) => {
    
    var SendAt = new Date().getTime()
    const MessageId = req.body.Sender + req.body.Receiver + SendAt
    const ADD_MESSAGE = `INSERT INTO MESSAGES VALUES("${MessageId}","${req.body.Sender}","${req.body.Receiver}","${req.body.MessageText}","${SendAt}")`
    connection.query(ADD_MESSAGE, (err, data) => {
        if(data) {
            console.log(ADD_MESSAGE)
        } else {
            console.log(err)
        } 
    })
    res.send("success")
    
})

// add all other users messaged by user
router.get("/add/:SenderId/:ReceiverId", (req, res) => {
    var SenderId = req.params.SenderId
    var ReceiverId = req.params.ReceiverId
    const MAKE_CHAT_ONE = `INSERT INTO MESSAGESBETWEEN VALUES("${SenderId}","${ReceiverId}")`
    // const MAKE_CHAT_TWO = `INSERT INTO MESSAGESBETWEEN VALUES("${ReceiverId}","${SenderId}")`
    connection.query(MAKE_CHAT_ONE, (err, data) => {
        if(data) {
	    console.log(MAKE_CHAT_ONE)
            res.send("success")
        } else {
            console.log(err)
        }
    })
})


module.exports = router
