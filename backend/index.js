const express = require("express");
const app = express();
const WeddingRouter = require("./src/routes");
const postSheets = require("./src/postSheets")
require('dotenv').config();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/wedding", WeddingRouter)

app.get("/test", async (req, res) => {
    const result = await postSheets("test@email.com", "trokadero zero", 2, "110042")
    console.log(result.status)
})

/* catch accessing non-existent endpoints */
app.use((req, res) => {
    res.status(404).send({ error: "You tried to access an unknown endpoint!" })
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});