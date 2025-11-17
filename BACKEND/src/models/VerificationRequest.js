// /server/models/VerificationRequest.js
const mongoose = require("mongoose");

const VerificationRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["identity", "qualification", "masjid_document"],
      required: true,
    },
    documentUrls: [
      {
        type: String,
      },
    ],
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VerificationRequest",
  VerificationRequestSchema
);
