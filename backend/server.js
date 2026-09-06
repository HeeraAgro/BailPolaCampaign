const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const campaignRoutes = require('./routes/campaignRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/campaign', campaignRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

async function startServer() {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not configured.');
  }

  await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  console.log('MongoDB connected successfully');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Unable to start server:', error.message);
  process.exit(1);
});
