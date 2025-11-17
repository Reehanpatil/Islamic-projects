const { auth } = require("./auth.middleware");
const { allowRoles } = require("./role.middleware");

module.exports = {
  auth,
  allowRoles,
};
