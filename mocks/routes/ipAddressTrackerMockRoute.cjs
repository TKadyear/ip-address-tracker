
const listIpAddresses = require("../mockData/ipAddressMock.json")
const getRandomNumber =(min, max) => {
  return Math.trunc(Math.random() * (max - min) + min);
}
module.exports = [
  {
    id: "get-country", 
    url: "/country,city", 
    method: "GET", 
    variants: [
      {
        id: "success", 
        type: "json",
        options: {
          status: 200,
          body: listIpAddresses[0],
        },
      },
      {
        id: "real", 
        type: "middleware", 
        options: {
          middleware: (req, res,) => { 
            const maxItems=listIpAddresses.length
            const randomValue= listIpAddresses[getRandomNumber(0,maxItems)]
            res.status(200);
            res.send(randomValue);
          },
        },
      },
      {
        id: "error", 
        type: "json",
        options: {
          status: 400, 
          body: {
            message: "Error",
          },
        },
      },
    ],
  }
];
