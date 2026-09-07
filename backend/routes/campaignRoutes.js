const express = require('express');
const { v2: cloudinary } = require('cloudinary');
const multer = require('multer');
const path = require('path');
const Submission = require('../models/Submission');

const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
  storage: multer.memoryStorage(),
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

const uploadToCloudinary = (buffer) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'bail-pola-campaign', resource_type: 'image' },
      (error, result) => (error ? reject(error) : resolve(result)),
    );

    stream.end(buffer);
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

    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return res.status(500).json({
        success: false,
        message: 'Cloudinary environment variables are not configured.',
      });
    }

    const uploadedPhoto = await uploadToCloudinary(req.file.buffer);
    const newSubmission = new Submission({
      fullName,
      village,
      mobileNumber,
      landSize,
      cropType,
      waterFacility,
      farmingMethod,
      challenge,
      photoUrl: uploadedPhoto.secure_url,
    });

    await newSubmission.save();
    console.log('Submission saved successfully:', newSubmission._id);

    return res.status(201).json({
      success: true,
      message: 'तुमचा फोटो यशस्वीरित्या सबमिट झाला आहे!',
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
