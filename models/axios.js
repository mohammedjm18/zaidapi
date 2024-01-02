const axios = require("axios");
const { base64ToUtf8 } = require("../models/buffer");
const { uft8ToBase64 } = require("../models/buffer");
const url = "http://etisalrx.com/panel/api/mobile_api2.php";
const headers = {
  "User-Agent": "Etisal RX",
  Authorization:
    "Basic NTU6MjYxNjFiYmFiMDE5ZDRiY2JlODA5NTE5MGEzOWQxM2U2YTU0ODRhYTc2NjEyYzIyYTMyYjk1ZTY0MzIxZGUzNQ==",
};

exports.fetch = async (body = "") => {
  try {
    const res = await axios.post(url, body, { headers });
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
