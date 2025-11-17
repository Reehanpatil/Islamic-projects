// /server/models/index.js

const User = require("./User");
const ImamProfile = require("./ImamProfile");
const MasjidProfile = require("./MasjidProfile");
const JobRequest = require("./JobRequest");
const Application = require("./Application");
const Message = require("./Message");
const VerificationRequest = require("./VerificationRequest");
const Notification = require("./Notification");

module.exports = {
  User,
  ImamProfile,
  MasjidProfile,
  JobRequest,
  Application,
  Message,
  VerificationRequest,
  Notification,
};
