import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
const Signup = () => {
  const containerStyle = {
  
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundImage: `url('data:image/jpeg;base64,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')`, // Set the background image here
  backgroundSize: 'cover', 
  
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '530px',
    width: '500px',
    borderRadius: '1rem 0 0 1rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ' 2rem',
    color: 'black',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '900px',
    height: '750px',
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const buttonStyle = {
    width: '80%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            firstName,
            lastName,
          }),
        });

        if (response.ok) {
          
          alert('Registration Successfull');
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div>
      <NavBar/>
   
    <div style={containerStyle}>
      
      <div style={boxStyle}>
        <div className="card" style={cardStyle}>
          <div className="col-md-6 col-lg-7 d-none d-md-block">
            <img
              src="https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300="
              alt="signup form"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
          <div className="col-md-7 col-lg-5 d-flex align-items-center">
            <div style={formStyle}>
              <form onSubmit={handleSignup} className="signup">
                <div className="mb-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={inputStyle}
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={inputStyle}
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    style={inputStyle}
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle}
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={inputStyle}
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pt-1 mb-4">
                  <button style={buttonStyle} type="submit">
                    Sign Up
                  </button><br/><br/>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    /</div>
  );
};

export default Signup;