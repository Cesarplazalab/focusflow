const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const { user, title, description, priority, dueDate } = req.body;

    const newTask = new Task({
        user,
        title,
        description,
        priority,
        dueDate
    });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update task (mark as completed)
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.isCompleted = !task.isCompleted; // Toggle the completed status
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
