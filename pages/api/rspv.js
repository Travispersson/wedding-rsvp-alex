const md5 = require('md5');
import axios from 'axios';

export default async function handler(req, res) {
  const body = { ...req.body, timestamp: new Date().toISOString().slice(0, 10) };

  if (md5(body.inviteCode) !== process.env.PASSWORD_HASH) {
    return res.status(403).send({ error: 'You inserted the wrong invite code!' });
  }
  
  try {
    const response = await axios.post(process.env.API_URL, { ...body });
    if (response.data.result === 'success') {
      return res.status(200).json({ data: 'OK' });
    } else {
      return res.status(403).send({ error: response.data.message });
    }
  } catch (error) {
    return res.status(500).send({ error: 'Something went wrong with the server. Please try again later!' });
  }

}
