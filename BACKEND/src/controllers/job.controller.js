const { JobRequest } = require("../models");
const { success, error } = require("../utils");

exports.createJob = async (req, res) => {
  try {
    const job = await JobRequest.create({
      ...req.body,
      masjidId: req.user.id,
    });
    return success(res, "Job created successfully", { job }, 201);
  } catch (err) {
    return error(res, err.message);
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobRequest.find().populate("masjidId");
    return success(res, "Job list fetched", { jobs });
  } catch (err) {
    return error(res, err.message);
  }
};
