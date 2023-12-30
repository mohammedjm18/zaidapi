const axios = require("axios");
const url = "http://etisalrx.com/panel/api/mobile_api2.php";
const headers = {
  Authorization:
    "Basic NTU6MjYxNjFiYmFiMDE5ZDRiY2JlODA5NTE5MGEzOWQxM2U2YTU0ODRhYTc2NjEyYzIyYTMyYjk1ZTY0MzIxZGUzNQ==",
};

exports.fetch = async (body = "") => {
  try {
    const res = await axios.post(url, body, { headers });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};
