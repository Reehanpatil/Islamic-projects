// /server/models/JobRequest.js
const mongoose = require("mongoose");

const JobRequestSchema = new mongoose.Schema(
  {
    masjidId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MasjidProfile",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 3000,
    },
    salary: {
      type: Number,
      default: 0,
    },
    accommodation: {
      type: Boolean,
      default: false,
    },
    preferredLanguages: [
      {
        type: String,
      },
    ],
    preferredTajweedLevel: {
      type: String,
      enum: ["any", "basic", "good", "excellent", "master"],
      default: "any",
    },
    employmentType: {
      type: String,
      enum: ["full-time", "part-time", "temporary", "contract"],
      default: "full-time",
    },

    status: {
      type: String,
      enum: ["open", "closed", "filled"],
      default: "open",
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    closingAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobRequest", JobRequestSchema);
