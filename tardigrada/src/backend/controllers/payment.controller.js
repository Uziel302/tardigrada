exports.paymentLink = async (req, res) => {
  let token = await this.getToken();
  return res.status(200).send({ sum: 0 });
};

exports.getToken = async (req, res) => {
  var options = {
    method: "POST",
    url: "https://sandbox.d.greeninvoice.co.il/api/v1/account/token",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: process.env.MORNING_ID,
      secret: process.env.MORNING_SECRET,
    }),
  };
  let response = await this.doRequest(options);
  return JSON.parse(response).token;
};

exports.doRequest = async (options) => {
  var request = require("request");
  return new Promise(function (resolve, reject) {
    request(options, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};
