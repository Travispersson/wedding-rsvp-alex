
export default async function handler(req, res) {
  try {
    const res = await axios.post(process.env.API_URL, { ...req.body, timestamp: Date().toISOString().slice(0, 10) });
    if (res.token === 200) {
      res.status(200).json({ data: 'OK' })
    } else {
      res.status(500).send({ error: 'You inserted the wrong invite code!' })
    }
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong with the server. Please try again later!' })
  }

}
