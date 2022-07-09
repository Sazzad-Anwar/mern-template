const Api = require("../models/apiRoutes");

module.exports = (req, res, next) => {
  const saveApi = async (req) => {
    const apiExists = await Api.findOne({ api: req.method + req.baseUrl });
    if (apiExists) {
      next();
    } else {
      let newApi = new Api({
        api: req.method + req.baseUrl,
      });
      await newApi.save();
      next();
    }
  };

  saveApi(req);
};
