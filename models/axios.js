const axios = require("axios");
const url = "http://etisalrx.com/panel/api/mobile_api2.php";
const headers = {
  Authorization:
    "Basic NTU6NTEyMTU2MTM1ODI2NzgyYWZlMzJhMDU4Yzc1NmFhNjc4ZmQxODMzZDZlZTQ0YzhlY2YwMjg5OWRkMjhmOGU4Zg==",
};

exports.fetch = async (body = "") => {
  try {
    const res = await axios.post(url, body, { headers });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};
