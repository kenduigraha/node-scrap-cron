const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/healthcheck', function (req, res) {
    res.status(200).json({
        code: 1000,
        message: "healthcheck ok",
        status: "OK"
    });
})

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})