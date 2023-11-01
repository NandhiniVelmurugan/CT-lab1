// RegistrationForm.js
import React, { Component } from "react";
import "./Register.css";

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "Nandhini",
      email: "",
      dateOfBirth: "",
      age: "",
      contactNumber: "",
      selectedCourse: "Computer Science",
      areaOfInterest: "",
      message: "",
      registrationSuccess: false,
      courses: [
        "Computer Science",
        "Programming and Software Development",
        "Information Systems",
        "Cybersecurity",
        "Data Science and Data Analysis",
        "Database Management",
        "Networking"
      ]
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      dateOfBirth,
      age,
      contactNumber,
      selectedCourse,
      areaOfInterest
    } = this.state;

    

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          dateOfBirth,
          age,
          contactNumber,
          selectedCourse,
          areaOfInterest
        })
      });

      if (response.ok) {
        this.setState({ registrationSuccess: true, message: "Registration successful!" });
      } else {
        const data = await response.json();
        this.setState({ message: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const {
      registrationSuccess,
      message,
      selectedCourse,
      courses
    } = this.state;

    return (
      <div className="wrapper">
        <div className="title">Registration Form</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <div className="inputfield">
              <label>First Name</label>
              <input
                type="text"
                className="input"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inputfield">
              <label>Last Name:</label>
              <input
                type="text"
                className="input"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inputfield">
              <label>Username:</label>
              <input
                type="text"
                className="input"
                name="username"
                placeholder="Username"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inputfield">
              <label>Email Address:</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inputfield">
              <label>Date of Birth:</label>
              <input
                type="date"
                className="input"
                name="dateOfBirth"
                placeholder="Date of Birth"
                required
                onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
              />
            </div>

            <div className="inputfield">
              <label>Age:</label>
              <input
                type="number"
                className="input"
                name="age"
                placeholder="Enter your age"
                min=""
                max="99"
                required
                onChange={(e) => this.setState({ age: e.target.value })}
              />
            </div>

            <div className="inputfield">
              <label>Contact Number</label>
              <input
                type="text"
                className="input"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="inputfield">
              <label>Area of Interest</label>
              <input
                type="text"
                className="input"
                name="areaOfInterest"
                placeholder="Area of Interest"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="inputfield">
              <label>Select Course</label>
              <select
                className="input"
                name="selectedCourse"
                value={selectedCourse}
                onChange={this.handleInputChange}
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="inputfield terms">
              <label className="check">
                <input
                  type="checkbox"
                  name="check"
                  value="Declared"
                  required
                />
                <span className="checkmark"></span>
              </label>
              <p>
                I hereby declare that the above information provided is true
                and correct.
              </p>
            </div>

            <p id="message">{message}</p>

            <div className="inputfield btns" id="btn">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </div>
        </form>

        {registrationSuccess && (
          <div className="alert">
            <button
              className="success-btn"
              onClick={() => this.setState({ registrationSuccess: false })}
            >
              Close
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default RegistrationForm;
