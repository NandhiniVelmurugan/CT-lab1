
import React,{useEffect,useState} from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';
function Navlog() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvcsFpRe2e1l6hgYKzoz0XMUeZMD7ONmsCQ&usqp=CAU"
          alt="Your Logo"
        />
      </div>
      <ul className="nav-links">
        <li><Link to="/homelog">Home</Link></li>
        <li><Link to="/aboutlog">About</Link></li>
        <li><Link to="/contactlog">Contact</Link></li>
        <li><Link to="/courseslog">Courses</Link></li>
        <li><Link to="/profile">Events</Link></li>
        <li><Link to="/quizlog">Achievement</Link></li>
      </ul>
      <ul className="nav-links nav-right">
        <li> <Link to="/profilelog">
        Nandhini</Link>

      </li>
        <li><Link to="/home">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navlog;
