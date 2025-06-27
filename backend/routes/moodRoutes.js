const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// Get all moods
router.get('/', async (req, res) => {
    try {
        const moods = await Mood.find();
        res.json(moods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a mood entry
router.post('/', async (req, res) => {
    const { user, mood, energyLevel } = req.body;

    const newMood = new Mood({
        user,
        mood,
        energyLevel
    });

    try {
        const savedMood = await newMood.save();
        res.status(201).json(savedMood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
