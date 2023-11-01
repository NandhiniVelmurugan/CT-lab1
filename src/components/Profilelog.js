import React, { useState, useEffect } from 'react';
import './Profilelog.css';
import Navlog from './Navlog';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://e-learning-website.onrender.com/getUserDetails', {
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
    <div>
      <Navlog />
      <div className="profile main">
        <div className="p-main">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-info">
                {user && (
                  <div>
                    <p className="profile-h">PROFILE</p>
                    <hr />
                    <p className="profile-other">
                      Username: {user.username}
                    </p>
                    <hr />
                    <p className="profile-other">
                      Email: {user.email}
                    </p>
                    <hr />
                    <p className="profile-other">
                      First Name: {user.firstName}
                    </p>
                    <hr />
                    <p className="profile-other">
                      Registered Course:Computer Science {user.selectedCourse}
                    </p>
                    <hr />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
