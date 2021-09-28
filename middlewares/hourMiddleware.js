const veirfyMorning = (req, res, next) => {
  const hour = new Date().getHours();
  if (hour < 8 || hour > 12)
    return res.status().send({
      message: "we are closed",
    });
  next();
};

module.exports = {
  veirfyMorning,
};
