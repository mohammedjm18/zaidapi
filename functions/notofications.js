const { fetch } = require("../models/axios");

exports.sendNotify = async (from, to, message) => {
  try {
    const data = await fetch(
      `fun=send_notify&id=${to}&key=079688783fdd9bd680549044cf80ace375c89c45d7bf288e0dbecc218924fe75&text=${message}&username=${from}`
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
