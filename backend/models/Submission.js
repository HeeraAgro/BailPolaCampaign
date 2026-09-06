const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  village: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true },
  landSize: { type: String, required: true, trim: true },
  cropType: { type: String, required: true, trim: true },
  waterFacility: { type: String, required: true, trim: true },
  farmingMethod: { type: String, required: true, trim: true },
  challenge: { type: String, required: true, trim: true },
  photoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', submissionSchema);
