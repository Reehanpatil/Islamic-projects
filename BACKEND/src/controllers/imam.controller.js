const { ImamProfile } = require("../models");
const { success, error } = require("../utils");

exports.createImamProfile = async (req, res) => {
  try {
    const profile = await ImamProfile.create({
      ...req.body,
      userId: req.user.id,
    });
    return success(res, "Imam profile created", { profile }, 201);
  } catch (err) {
    return error(res, err.message);
  }
};

exports.getImamProfile = async (req, res) => {
  try {
    const profile = await ImamProfile.findOne({ userId: req.params.userId });
    return success(res, "Imam profile fetched", { profile });
  } catch (err) {
    return error(res, err.message);
  }
};
