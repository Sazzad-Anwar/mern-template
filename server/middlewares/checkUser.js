const findRole = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

module.exports = function hasPermission(role) {
  return (req, res, next) => {
    // console.log(req.method, req.baseUrl)
    if (findRole(req.user.role, role).length > 0) {
      next();
    } else {
      // res.status(403)
      // throw new Error(`You don't have permission to access this resource`);
      res
        .status(403)
        .json({ message: `You don't have permission to access this resource` });
    }
  };
};
