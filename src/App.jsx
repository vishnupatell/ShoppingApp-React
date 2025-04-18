import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import { Toaster } from 'react-hot-toast'; 

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';
import LoginContext from './context/LoginContext';

function App() {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        navigate('/signup');
      }, 3000);
    }
  }, [login]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      {/* Navbar */}
      <nav className="bg-indigo-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex gap-6 text-lg font-semibold">
            <Link to="/" className="hover:text-yellow-300 transition duration-200">
              Home
            </Link>
            <Link to="/cart" className="hover:text-yellow-300 transition duration-200">
              Cart
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex gap-6 text-lg font-semibold">
            <Link to="/login" className="hover:text-yellow-300 transition duration-200">
              Login
            </Link>
            <Link to="/signup" className="hover:text-yellow-300 transition duration-200">
              Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

