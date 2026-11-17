import React, { useState } from 'react';
import { FaUser, FaLock, FaPhone } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { MdOutlineTaskAlt } from 'react-icons/md';
import axios from 'axios';
import './signup.css';
import Hero from '../Hero/Hero';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = ({darkmode,setdarkmode}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    try {
      const response = await axios.post(
        'https://mypyims.curiositylabpakistan.com/apis/insert.php',
        { name, email, phone, role, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response) {
        navigate('/');
        console.log(response)
       
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };
  
  return (
    <>
    <Navbar/>
      <Hero darkmode={darkmode} />
      <div className="back">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <div className="inputbox">
              <input
                type="text"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="number"
                placeholder="Phone no."
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <FaPhone className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <TbMailFilled className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="text"
                placeholder="Choose Role"
                required
                onChange={(e) => setRole(e.target.value)}
              />
              <MdOutlineTaskAlt className="icon" />
            </div>
            <div className="rememberforgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Sign up</button>
            {error && <p className="error">{error}</p>}
            <div className="registerlink">
              <p>
                Already Have an account? <Link to="/signin">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
