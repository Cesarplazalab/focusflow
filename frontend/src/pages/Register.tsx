import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post('/users/register', { username, password });
      console.log('User Registered:', res.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleRegister} className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
