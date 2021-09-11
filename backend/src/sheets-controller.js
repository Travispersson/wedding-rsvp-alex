const postSheets = require("./postSheets")


const rsvp = async (req, res) => {

    const { email, name, attendees, code } = req.body
    // TODO add checker middleware for body to make sure that body contains everything needed
    // TODO check if rsvp code is valid or just filter in g-sheets manually?
    try {
        const result = await postSheets(email, name, attendees, code)

        if (result.status === 200) {
            res.status(200).end()
        } else {
            res.status(result.status).json({ error: "something went wrong when appending your information to google sheets" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }


}

const authenticate = async (req, res) => {
    const { authenticationCode } = req.body;

    // TODO FIX AUTHENTICATION FOR GETTING PASSED LOCKED SCREEN
    if (authenticationCode === "test") {
        res.status(200).end()
    } else {
        res.status(403).end()
    }
}



module.exports = { rsvp, authenticate }