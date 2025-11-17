// /server/controllers/index.js

const authController = require("./auth.controller");
const imamController = require("./imam.controller");
const masjidController = require("./masjid.controller");
const jobController = require("./job.controller");
const applicationController = require("./application.controller");
const messageController = require("./message.controller");
const verificationController = require("./verification.controller");
const notificationController = require("./notification.controller");

module.exports = {
  authController,
  imamController,
  masjidController,
  jobController,
  applicationController,
  messageController,
  verificationController,
  notificationController,
};
