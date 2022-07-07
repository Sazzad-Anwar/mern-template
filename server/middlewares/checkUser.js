const Role = require("../models/role");

module.exports = function hasPermission() {
  return (req, res, next) => {
    let roles = req.user.role;
    let api = req.method + req.baseUrl;

    if (roles.includes("superAdmin")) {
      next();
    } else {
      Role.findOne({ role: roles[0] })
        .lean()
        .then(({ role, accessRoutes }) => {
          if (accessRoutes.includes(api)) {
            next();
          } else {
            res.status(403).json({
              message: `You don't have permission to access this resource`,
            });
          }
        })
        .catch((err) => {
          res.status(403).json({
            message: `You don't have permission to access this resource`,
          });
        });
    }
  };
};
