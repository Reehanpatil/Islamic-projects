// /server/models/MasjidProfile.js
const mongoose = require("mongoose");

const MasjidProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    masjidName: {
      type: String,
      required: true,
      trim: true,
    },
    headName: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
      index: true,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      default: "USA",
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      }, // [lng, lat]
    },

    imamRequired: {
      type: Boolean,
      default: false,
    },
    preferredTajweedLevel: {
      type: String,
      enum: ["any", "basic", "good", "excellent", "master"],
      default: "any",
    },
    salaryRange: {
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 0,
      },
    },
    accommodation: {
      type: Boolean,
      default: false,
    },

    images: [
      {
        type: String,
      },
    ], // masjid photos

    description: {
      type: String,
      maxlength: 2000,
    },

    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// 2dsphere index for geo queries
MasjidProfileSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("MasjidProfile", MasjidProfileSchema);
