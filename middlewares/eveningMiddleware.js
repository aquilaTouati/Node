const verifyEvening = (req, res, next) => {
  const hour = new Date().getHours();
  if (hour < 12 || hour > 18)
    return res.status().send({
      message: "we are closed",
    });
};
next();

module.exports = {
  verifyEvening,
};
