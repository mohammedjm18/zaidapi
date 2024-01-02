const { fetch } = require("../models/axios");

exports.changeStatus = async (id, status) => {
  try {
    const data = await fetch(
      `fun=update_request_status&id=${id}&profile_id=28&status=${status}&type=company&username=28`
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};