const express  = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config()

const app = express()

const indexRouter = require("./routes/index")
const tinderCardRouter = require("./routes/card")


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

const mongoDB = require("./config/db")

app.use("/", indexRouter)
app.use("/api/card", tinderCardRouter)

app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error:{
            Message: error.message,
        }
    })
})

module.exports = app;