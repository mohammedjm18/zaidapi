const axios = require("axios");
const { base64ToUtf8 } = require("../models/buffer");
const { uft8ToBase64 } = require("../models/buffer");
const url = "http://etisalrx.com/panel/api/mobile_api2.php";
const headers = {
  "User-Agent": "Etisal RX",
  Authorization:
    "Basic Mjg6MDc5Njg4NzgzZmRkOWJkNjgwNTQ5MDQ0Y2Y4MGFjZTM3NWM4OWM0NWQ3YmYyODhlMGRiZWNjMjE4OTI0ZmU3NQ==",
};

exports.fetch = async (body = "") => {
  try {
    const res = await axios.post(url, body, { headers });
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
