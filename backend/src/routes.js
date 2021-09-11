const WeddingRouter = require("express").Router()
const Controller = require("./sheets-controller.js")

WeddingRouter.post("/authenticate", Controller.authenticate)
WeddingRouter.post("/rsvp", Controller.rsvp)


module.exports = WeddingRouter