const Role = require('../models/role');

module.exports = function hasPermission() {
  return (req, res, next) => {

    let roles = req.user.role;
    let api = req.method + req.baseUrl;

    for (let i in roles) {
      console.log(roles)
      Role.findOne({ role: roles[i] }).lean().then(({ role, accessRoutes }) => {
        if (role === 'superAdmin' && accessRoutes.includes('*')) {
          next()
        }
        else if (role !== 'superAdmin' && accessRoutes.includes(api)) {
          next()
        } else {
          res
            .status(403)
            .json({ message: `You don't have permission to access this resource` });
        }

      }).catch((err) => {
        res
          .status(403)
          .json({ message: `You don't have permission to access this resource` });
      })
    }
  };
};
