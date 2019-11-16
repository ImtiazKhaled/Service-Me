const app = require('express')()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors =  require('cors')
const port = 4500

// middleware
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods","GET, POST, DELETE, PATCH");
// 	next();
// })

app.use(bodyParser.json())

// route declaration
const vendorsRoutes = require('./routes/vendors')
const vendorRoutes = require('./routes/vendor')
app.use('/vendors', vendorsRoutes)
app.use('/vendor', vendorRoutes)


app.listen(port, () => {
    console.log('serviceme server listening on port', port)
})