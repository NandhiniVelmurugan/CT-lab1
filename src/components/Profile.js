import React, { Component } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Profile.css';
import Navlog from '../components/Navlog';
const MySwal = withReactContent(Swal);

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          type: 'Online Lecture',
          title: 'Introduction to React',
          instructor: 'John Doe',
          date: 'October 25, 2023',
          time: '10:00 AM - 11:30 AM',
          isLive: false,
        },
        {
          type: 'Online Quiz',
          title: 'JavaScript Fundamentals Quiz',
          instructor:'Henry',
          date: 'October 27, 2023',
          time: '2:00 PM - 3:30 PM',
          isLive: false,

        },
        {
          type: 'Webinar',
          title: 'Webinar on Web Development Trends',
          instructor: 'Jane Smith',
          date: 'October 30, 2023',
          time: '3:00 PM - 4:30 PM',
          isLive: false,
        },
       
        {
          type: 'Online Lecture',
          title: 'Advanced CSS Techniques',
          instructor: 'Alice Johnson',
          date: 'November 5, 2023',
          time: '9:30 AM - 11:00 AM',
          isLive: false,
        },
        {
          type: 'Online Workshop',
          title: 'Digital Marketing Essentials',
          instructor: 'David Smith',
          date: 'November 10, 2023',
          time: '1:00 PM - 3:00 PM',
          isLive: false,
        },
      ],
      selectedDate: new Date(),
      showSelectedDateEvents: false,
    };
  }

  startEvent = (index) => {
    const event = this.state.events[index];
    const currentTime = new Date();
    const eventTime = new Date(`${event.date} ${event.time.split(' - ')[0]}`);

    if (currentTime < eventTime) {
      MySwal.fire({
        title: 'Oops',
        text: `${event.type} has not started yet. Please join at the scheduled time.`,
        icon: 'error',
      });
    } else {
      const updatedEvents = [...this.state.events];
      updatedEvents[index].isLive = true;
      this.setState({ events: updatedEvents });
      // You can add code here to initiate the event (e.g., starting a live lecture or quiz).
    }
  };

  onDateChange = (date) => {
    this.setState({
      selectedDate: date,
      showSelectedDateEvents: true,
    });
  };

  render() {
    const selectedDateEvents = this.state.events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === this.state.selectedDate.getDate() &&
        eventDate.getMonth() === this.state.selectedDate.getMonth() &&
        eventDate.getFullYear() === this.state.selectedDate.getFullYear()
      );
    });

    return (
      <div>
        <Navlog/>
      
      <div className="event-list-container">
       
        <h1>Upcoming Events</h1>
        <div className="event-cards">
          {this.state.showSelectedDateEvents ? (
            selectedDateEvents.map((event, index) => (
              <div key={index} className="event-card">
                <h2 className="event-type">{event.type}</h2>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-details">Instructor: {event.instructor}</p>
                <p className="event-details">Date: {event.date}</p>
                <p className="event-details">Time: {event.time}</p>
                {event.isLive ? (
                  <div>
                    <p className="event-details live-indicator">
                      {event.type} is in progress...
                    </p>
                    <video controls className="video-player">
                      <source src="your-video-source.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => this.startEvent(index)}
                      className="start-button"
                    >
                      Start {event.type}
                    </button>
                    <p>
                      Join us on {event.date} at {event.time} for this{' '}
                      {event.type}.
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            this.state.events.map((event, index) => (
              <div key={index} className="event-card">
                <h2 className="event-type">{event.type}</h2>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-details">Instructor: {event.instructor}</p>
                <p className="event-details">Date: {event.date}</p>
                <p className="event-details">Time: {event.time}</p>
                {event.isLive ? (
                  <div>
                    <p className="event-details live-indicator">
                      {event.type} is in progress...
                    </p>
                    <video controls className="video-player">
                      <source src="your-video-source.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => this.startEvent(index)}
                      className="start-button"
                    >
                      Start {event.type}
                    </button>
                    <p>
                      Join us on {event.date} at {event.time} for this{' '}
                      {event.type}.
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default EventList;
