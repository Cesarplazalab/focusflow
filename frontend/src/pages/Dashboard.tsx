import { useState, useEffect } from 'react';
import api from '../services/api';
import Card from '../components/Card';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';

interface Task {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Mood {
  _id: string;
  mood: string;
  energyLevel: number;
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [moods, setMoods] = useState<Mood[]>([]);
  const [newTask, setNewTask] = useState('');
  const [newMood, setNewMood] = useState('');

  useEffect(() => {
    fetchTasks();
    fetchMoods();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchMoods = async () => {
    try {
      const res = await api.get('/moods');
      setMoods(res.data);
    } catch (error) {
      console.error('Error fetching moods:', error);
    }
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/tasks', {
        title: newTask,
        description: 'New task description',
        user: 'guest'
      });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleAddMood = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/moods', {
        mood: newMood,
        energyLevel: 5,
        user: 'guest'
      });
      setNewMood('');
      fetchMoods();
    } catch (error) {
      console.error('Error adding mood:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">FocusFlow Dashboard</h1>
        <Button onClick={handleLogout} color="danger">
          Logout
        </Button>
      </div>

      {/* Task Section */}
      <Card>
        <h2 className="text-2xl font-semibold text-gray-700">Tasks</h2>
        <form onSubmit={handleAddTask} className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <Button type="submit" color="secondary">
            Add Task
          </Button>
        </form>

        {tasks.length === 0 ? (
          <p className="text-gray-500 italic">No tasks yet. Add one!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`p-4 border rounded-lg shadow cursor-pointer hover:bg-green-50 transition flex justify-between items-center ${task.isCompleted ? 'bg-green-100' : 'bg-white'}`}
                onClick={async () => {
                  try {
                    await api.put(`/tasks/${task._id}`);
                    fetchTasks();
                  } catch (error) {
                    console.error('Error updating task:', error);
                  }
                }}
              >
                <span className="font-medium">{task.title}</span>
                <span className="text-sm text-gray-500">{task.isCompleted ? 'Completed' : 'Incomplete'}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>

      {/* Mood Section */}
      <Card>
        <h2 className="text-2xl font-semibold text-gray-700">Mood Check-ins</h2>
        <form onSubmit={handleAddMood} className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Your Mood"
            value={newMood}
            onChange={(e) => setNewMood(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <Button type="submit" color="primary">
            Add Mood
          </Button>
        </form>

        {moods.length === 0 ? (
          <p className="text-gray-500 italic">No mood check-ins yet. Add one!</p>
        ) : (
          <ul className="space-y-2">
            {moods.map((mood) => (
              <li key={mood._id} className="p-4 border rounded-lg shadow bg-white">
                <span className="font-medium">Mood:</span> {mood.mood} &nbsp;
                <span className="font-medium">Energy:</span> {mood.energyLevel}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </PageWrapper>
  );
}

export default Dashboard;


