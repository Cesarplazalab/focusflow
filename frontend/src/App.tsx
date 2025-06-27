import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

