import React from 'react';
import './Quiz.css';
import NavBar from '../components/NavBar';

const Venue = () => {
  const size = {
     fontSize: '18px',
    padding: '38px'
  };
  const sizeH = {
     fontSize: '20px',
  };
  return (
    
    <div >
    <NavBar/>
    <div className="venue-container">
     
      <div className="desc">
        <p className='what1'>A C H I E V E M E N T </p>
        <p><strong>“Goals are dreams with deadlines.” </strong></p>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/10/MG_0863.jpg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={sizeH}>Bhasker Gupta, CEO and Founder</p>
        <p style={size}>“It is a great honour to be recognized by Cypher for “Best big data implementation of the year” and it is truly rewarding for all the hard work our teams have put in over the last one year. Our commitment to reliable, high-quality solutions to help solve challenging big data problems</p>
      </div>
    </div>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={sizeH}>Gurpreet Singh, Co-founder & Director</p>
        <p style={size}>If a seaside soirée has been your lifelong wedding dream, you can absolutely make it happen. And the best part is, we provide an affordable tariff for beach weddings.So you can say "I do" with the sand beneath your feet and the waves as your backdrop, without breaking the bank.</p>
      </div>
      <div className="grid-itemV">
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/10/MG_0883.jpg" alt="oops!"  />
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/10/MG_0893.jpg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>Shantanu Mirajkar, Co-Founder,</p>
        <p style={size}>“It’s always a great pleasure to find ourselves among like-minded professionals and experts in the field. But winning The Great Learning awards has made being a part of Cypher 2017 that much more special. It’s been hugely motivating for the team and we’ll keep pressing forward with the work we’re doing for Habitual AI.” </p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>Anirudh Shah, Founder, </p>
        <p style={size}>“This project was truly unique. Diabetes related distress is known to be a lead indicator for lack of adherence, future complications and poor glycemic control. Currently, this is very hard to assess and takes time and effort through face-to-face conversation. With mobile passive sensing, we can quickly, proactively and non-intrusively identify high-risk patients ".</p>
      </div>
      <div className="grid-itemV">
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/10/MG_0905.jpg" alt="oops!"  />
      </div>
    </div>

    </div>
    </div>
  );
};

export default Venue;