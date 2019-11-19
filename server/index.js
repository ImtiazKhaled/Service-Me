const app = require("express")()
const bodyParser = require("body-parser")
const port = 3001

// middleware
app.use(bodyParser.json())

// route declaration
const vendorsRoutes = require("./routes/vendors")
const vendorRoutes = require("./routes/vendor")
const messagesRoutes = require("./routes/messages")
const customerRoutes = require("./routes/customer")
const userRoutes = require("./routes/user")
app.use("/vendors", vendorsRoutes)
app.use("/vendor", vendorRoutes)
app.use("/messages", messagesRoutes)
app.use("/customer", customerRoutes)
app.use("/user", userRoutes)


app.listen(port, () => {
    console.log("serviceme server listening on port", port)
})
