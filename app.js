require('rootpath')()
require('./biz-error')
const express = require('express')
const app = express()
const PORT = 3000
const config = require('config')
const fundebug = require("fundebug-nodejs");
fundebug.apikey=config.fundebug;
fundebug.releaseStage = process.env.NODE_ENV || "development"

app.use(fundebug.ExpressErrorHandler);
app.use(require('./router'))
app.use((err, req, res, next) => {
  if (err instanceof BizError || !(err instanceof Error)) {
    res.status(400).send({message: err.message || err})
  } else {
    console.log(err.stack)
    res.status(500).send({message: '服务端错误'})
  }
})
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})

app.destroy = () => {
  const db = require('./db')
  db.destroy()
}

module.exports = ap