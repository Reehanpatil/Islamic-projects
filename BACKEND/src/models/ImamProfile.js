// /server/models/ImamProfile.js
const mongoose = require("mongoose");

const ImamProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // personal details
    dob: { type: Date },
    age: { type: Number },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    bio: {
      type: String,
      maxlength: 1000,
    },

    // qualifications
    hafiz: {
      type: Boolean,
      default: false,
    },
    tajweedLevel: {
      type: String,
      enum: ["basic", "good", "excellent", "master"],
      default: "good",
    },
    quranMemorizedChapters: {
      type: Number,
      default: 0,
    },

    // experience & availability
    experienceYears: {
      type: Number,
      default: 0,
    },
    availability: {
      type: String,
      enum: ["full-time", "part-time", "on-call"],
      default: "full-time",
    },

    // contacts & languages
    languages: [
      {
        type: String,
      },
    ],
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      default: "India",
    },
    address: {
      type: String,
    },

    // uploads
    certificateUrls: [
      {
        type: String,
      },
    ], // URLs to PDF/images
    avatarUrl: {
      type: String,
    },

    // status & meta
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    rating: {
      type: Number,
      default: 0,
    }, // future feature

    reviewsCount: {
      type: Number,
      default: 0,
    },

    // last active
    lastActiveAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImamProfile", ImamProfileSchema);
