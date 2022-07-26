const Api = require("../models/apiRoutes");

module.exports = (req, res, next) => {
  const saveApi = async (req) => {
    const apiSlugExist = await Api.findOne({ slug: req.baseUrl.split("/")[3] });
    const apiExists = await Api.findOne({ name: req.method + req.baseUrl });
    if (apiExists && apiSlugExist) {
      next();
    } else if (!apiExists && apiSlugExist) {
      apiSlugExist.name.push(req.method + req.baseUrl);
      await apiSlugExist.save();
      next();
    } else if (!apiExists && !apiSlugExist) {
      const api = new Api({
        slug: req.baseUrl.split("/")[3],
        name: [req.method + req.baseUrl],
      });
      await api.save();
      next();
    } else {
      next();
    }
  };

  saveApi(req);
};
