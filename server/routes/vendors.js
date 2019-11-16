const router = require('express').Router()

router.get('/', (res, req) => {
    res.send('listening on server');
})

router.post('/', (res, req) => {
    res.send(req.body)
})

module.exports = router