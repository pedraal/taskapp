const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()

const maintenance = false
app.use((req, res, next) => {
  if (maintenance) {
    res.status(503).send("Site under maintenance, try again later")
  } else {
    next()
  }
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app
