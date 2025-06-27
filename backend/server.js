const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const taskRoutes = require('./routes/taskRoutes');
const moodRoutes = require('./routes/moodRoutes');

const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/moods', moodRoutes);

app.use('/api/users', userRoutes);

// Simple test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
