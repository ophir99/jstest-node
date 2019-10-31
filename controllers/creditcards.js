const validate = require("./validate");
const creditcards = [];

exports.getAll = (req, res) => {
  res.send({ data: creditcards });
};

exports.save = (req, res) => {
  const { number } = req.body;
  if (validate(number)) {
    creditcards.push(req.body);
    res.send({ saved: true });
  } else {
    res.send({ saved: false, msg: "Not a valid card" });
  }
};
