// RegistrationForm.js
import React, { Component } from "react";
import "./Register.css";

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      registrationSuccess: false,
      message: "",
      formData: {
        firstName: "",
        lastName: "",
        username: "Nandhini",
        email: "",
        dateOfBirth: "",
        age: "",
        contactNumber: "",
        selectedCourse: "Computer Science",
        areaOfInterest: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const { formData } = this.state;
    const allFieldsFilled = Object.values(formData).every((field) => field !== "");

    if (allFieldsFilled) {
      this.setState({ registrationSuccess: true, message: "Registered Successfully!" });
    } else {
      this.setState({ message: "Registered successfull." });
    }
  };

  render() {
    const { registrationSuccess, message, formData } = this.state;

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
                placeholder="Nandhini"
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
                value={formData.selectedCourse}
                onChange={this.handleInputChange}
              >
                {["Computer Science", "Programming and Software Development", "Information Systems", "Cybersecurity", "Data Science and Data Analysis", "Database Management", "Networking"].map((course) => (
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

            <p id="message" className={registrationSuccess ? "success" : ""}>
              {registrationSuccess ? "Registered Successfully!" : message}
            </p>

            <div className="inputfield btns" id="btn">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
