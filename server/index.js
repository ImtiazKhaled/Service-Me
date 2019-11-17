const app = require('express')()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors =  require('cors')
const port = 3001

// middleware
app.use(bodyParser.json())

// route declaration
const vendorsRoutes = require('./routes/vendors')
const vendorRoutes = require('./routes/vendor')
const messagesRoutes = require('./routes/messages')
app.use('/vendors', vendorsRoutes)
app.use('/vendor', vendorRoutes)
app.use('/messages', messagesRoutes)


app.listen(port, () => {
    console.log('serviceme server listening on port', port)
})
