const { MasjidProfile } = require("../models");
const { success, error } = require("../utils");

exports.createMasjidProfile = async (req, res) => {
  try {
    const profile = await MasjidProfile.create({
      ...req.body,
      userId: req.user.id,
    });
    return success(res, "Masjid profile created", { profile }, 201);
  } catch (err) {
    return error(res, err.message);
  }
};

exports.getMasjidList = async (req, res) => {
  try {
    const masajid = await MasjidProfile.find().limit(100);
    return success(res, "Masjid list fetched", { masajid });
  } catch (err) {
    return error(res, err.message);
  }
};
