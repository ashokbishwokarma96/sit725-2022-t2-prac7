const getUser = (req, res) => {
  res.json({
    statusCode: 200,
    message: "Success",
    data: { name: "Ashok", age: 26 },
  });
};

module.exports = {
  getUser,
};
