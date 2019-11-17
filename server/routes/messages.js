const router = require('express').Router()
const config = require('../connection')
const connection = config.connection

// get all other users messaged by user
router.get('/:id', (req, res) => {
    var id = req.params.id
    const GET_MESSAGES_BETWEEN = `SELECT * FROM MESSAGESBETWEEN JOIN SMUSER ON Messagee=UserId WHERE Messager='${id}'`
    console.log(GET_MESSAGES_BETWEEN)
    connection.query(GET_MESSAGES_BETWEEN, (err, data) => {
        if(data) {
            if(data.length)
                res.send(data)
            else
                res.send('That user does not have any messages')
        } else {
            console.log(err)
        }
    })
})

// get all other users messaged by user
router.get('/:SenderId/:ReceiverId', (req, res) => {
    var SenderId = req.params.SenderId
    var ReceiverId = req.params.ReceiverId
    const GET_CHAT = `SELECT * FROM MESSAGES WHERE (Sender='${SenderId}' AND Receiver='${ReceiverId}') OR (Receiver='${SenderId}' AND Sender='${ReceiverId}')`
    console.log(GET_CHAT)
    connection.query(GET_CHAT, (err, data) => {
        if(data) {
            if(data.length)
                res.send(data)
            else
                res.send('There are not messages between the two users')
        } else {
            console.log(err)
        }
    })
})

// add a new message
router.post('/', (req, res) => {
    
    var SendAt = new Date().getTime()
    const MessageId = req.body.Sender + req.body.Receiver + SendAt
    const SEARCH_MESSAGES_BETWEEN = `SELECT * FROM MESSAGESBETWEEN JOIN SMUSER ON Messagee=UserId WHERE Messager='${req.body.Sender}' AND Messagee='${req.body.Receiver}'`
    const ADD_MESSAGE = `INSERT INTO MESSAGES VALUES('${MessageId}','${req.body.Sender}','${req.body.Receiver}','${req.body.MessageText}','${SendAt}')`
    connection.query(SEARCH_MESSAGES_BETWEEN, (err, data) => {
        if(data && !data.length) {
            const INSERT_MESSAGE_BETWEEN_ONE = `INSERT INTO MESSAGESBETWEEN VALUES('${req.body.Sender}','${req.body.Receiver}')`
            const INSERT_MESSAGE_BETWEEN_TWO = `INSERT INTO MESSAGESBETWEEN VALUES('${req.body.Receiver}','${req.body.Sender}')`
            console.log(INSERT_MESSAGE_BETWEEN_ONE)
            connection.query(INSERT_MESSAGE_BETWEEN_ONE, (err, data) => {
                if(err)   console.log(err)
            })
            console.log(INSERT_MESSAGE_BETWEEN_TWO)
            connection.query(INSERT_MESSAGE_BETWEEN_TWO, (err, data) => {
                if(err)   console.log(err)
            })
        } else {
            console.log(err)
        }
    })
    console.log(ADD_MESSAGE)
    connection.query(ADD_MESSAGE, (err, data) => {
        if(err)   console.log(err)
    })
    res.send('success')
    
})

module.exports = router