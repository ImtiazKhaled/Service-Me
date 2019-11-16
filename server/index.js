const app = require('express')()
const bodyParser = require('body-parser')
var mysql = require('mysql')

app.use(bodyParser.json())

const vendorRoutes = require('./routes/vendor')
app.use('/vendor', vendorRoutes)

app.listen(4000, () => {
    console.log('serviceme server listening on port 4000')
})