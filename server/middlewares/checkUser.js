const Role = require("../models/role");

module.exports = function hasPermission() {
  return (req, res, next) => {
    let role = req.user.role;
    let api = req.method + req.baseUrl;

    if (role === "superAdmin") {
      next();
    } else {
      Role.findOne({ role })
        .then(({ role, accessRoutes }) => {
          if (accessRoutes.includes(api)) {
            next();
          } else {
            res.status(403).json({
              message: `You don't have permission to ${
                req.method === "PUT"
                  ? "UPDATE"
                  : req.method === "POST"
                  ? "CREATE"
                  : req.method === "GET"
                  ? "SEE"
                  : req.method
              } this resource`,
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            message: `Server error occurred!`,
          });
        });
    }
  };
};
