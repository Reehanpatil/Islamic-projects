// /server/models/Application.js
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobRequest",
      required: true,
    },
    imamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImamProfile",
      required: true,
    },
    coverLetter: {
      type: String,
      maxlength: 2000,
    },
    expectedSalary: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "shortlisted", "accepted", "rejected"],
      default: "pending",
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    viewedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// unique compound index so same imam cannot apply twice to same job
ApplicationSchema.index({ jobId: 1, imamId: 1 }, { unique: true });

module.exports = mongoose.model("Application", ApplicationSchema);
