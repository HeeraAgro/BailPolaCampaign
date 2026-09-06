const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const Submission = require('../models/Submission');

const router = express.Router();
const uploadDirectory = path.join(__dirname, '..', 'uploads');

fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const namePart = (req.body.fullName || 'farmer')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 30);

    const uniqueSuffix = Date.now();
    const extension = path.extname(file.originalname);
    cb(null, `${namePart || 'farmer'}-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    const extension = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);

    if (extension && mime) {
      cb(null, true);
    } else {
      cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

const uploadSubmissionPhoto = (req, res, next) => {
  upload.single('photo')(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message || 'Photo upload failed.',
      });
    }

    return next();
  });
};

router.post('/submit', uploadSubmissionPhoto, async (req, res) => {
  try {
    const {
      fullName,
      village,
      mobileNumber,
      landSize,
      cropType,
      waterFacility,
      farmingMethod,
      challenge,
    } = req.body;

    if (
      !fullName ||
      !village ||
      !mobileNumber ||
      !landSize ||
      !cropType ||
      !waterFacility ||
      !farmingMethod ||
      !challenge ||
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields and a photo are required.',
      });
    }

    const photoUrl = `/uploads/${req.file.filename}`;

    const newSubmission = new Submission({
      fullName,
      village,
      mobileNumber,
      landSize,
      cropType,
      waterFacility,
      farmingMethod,
      challenge,
      photoUrl,
    });

    await newSubmission.save();

    return res.status(201).json({
      success: true,
      message: 'तुमचा फोटो यशस्वीरित्या सबमिट झाला आहे!',
      data: newSubmission,
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
