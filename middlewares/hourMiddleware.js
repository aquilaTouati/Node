const veirfyMorning = (req, res, nest) => {
  const hour = new Date().getHours();
  if (hour < 8 || hour > 12)
    return res.status().send({
      message: "we are closed",
    });
};
next();

module.exports = {
  veirfyMorning,
};
