require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contact', contactRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
