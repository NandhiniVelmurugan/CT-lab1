import React from 'react';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


const cardData = [
  {
    imageUrl: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg',
    name: 'Data Science',
    title: 'Architect & Engineer',
    description: 'We love that guy and happy birthday to u all',
  },
  {
    imageUrl: "https://img.freepik.com/premium-photo/3d-cloud-computing-hosting-technology-with-electronic-devices_843415-75.jpg",
    name: 'Cloud Computing',
    title: 'Graphic Designer',
    description: 'A creative mind with a passion for design',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfy2eJK3BSTJqelRIpCfCP7VHrpYmLccsbIg&usqp=CAU',
    name: 'Software Development',
    title: 'Software Developer',
    description: 'Coding enthusiast and problem solver',
  },
];

function Home() {
  return (
    <div>
      <NavBar/>
       <div className='hero-content '>
      <div className="banner-area">
  <div className="banner-text">
   
    <h3>Learn on your schedule</h3>
    <p>“Technology will not replace great teachers but technology in the hands of great teachers can be transformational.”</p>
    <Link to="/login">
  <button>Register</button>
</Link> 
  </div>
</div>
</div>

      <h2 className="popular-courses-heading">Popular Courses</h2>
      <div className="simple-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="simple-card">
          <img src={card.imageUrl} alt="Card Image" /> {/* Set the src attribute to card.imageUrl */}
          <div className="card-description">
            <h4>{card.name}</h4>
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
        </div>
        ))}
      </div>

      <h4 className="popular-courses-heading2">Learn Anything</h4>
      <h4 className="popular-courses-heading3">Benefits About Online Learning Expertise</h4>
      <div className="vertical-card-container">
        <div className="vertical-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9uazsymTotFvi0PapbNE6CBO88tYYZWNROZ455V_1Ix5KBx2" alt="Vertical Card Image" />
          <div className="card-description">
            <h4>Online Courses</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>

        <div className="vertical-card">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDibjIT9kaBxSacYYBLgZ6vax-3VCQN3oTPg6ttBibDs5ayar5" alt="Vertical Card Image" />
          <div className="card-description">
            <h4>Earn A Certificates</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
          </div>
        </div>

        <div className="vertical-card">
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4dJVmPJ-cdeoJebGrZmkYCrRNSzWYXcuUU0k9xFQwe0iaSX0y" alt="Vertical Card Image" />
          <div className="card-description">
            <h4>Learn with Expert</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>
      <section className="plan new plan-section" id="plan">
  <h1 className="heading">
    <span>our plans</span>
  </h1>

  <div className="box-container">
    <div className="box">
      <FontAwesomeIcon icon={faPaperPlane} size="3x" />
      <h3>basic plan</h3>
      <ul>
        <li>full courses</li>
        <li>projects</li>
        <li>certification</li>
        <li>job placements</li>
        <li>24/7 support</li>
      </ul>
      <p>
        <a href={`/Payment?amount=30&plan=basic`}>Choose Plan</a>
      </p>
      <div className="price">
        <span></span>30<span>/mo</span>
      </div>
    </div>

    <div className="box">
      <FontAwesomeIcon icon={faPlane} size="3x" />
      <h3>standard plan</h3>
      <ul>
        <li>full courses</li>
        <li>projects</li>
        <li>certification</li>
        <li>job placements</li>
        <li>24/7 support</li>
      </ul>
      <p>
        <a href={`/Payment?amount=60&plan=standard`}>Choose Plan</a>
      </p>
      <div className="price">
        <span></span>60<span>/mo</span>
      </div>
    </div>

    <div className="box">
      <FontAwesomeIcon icon={faRocket} size="3x" />
      <h3>premium plan</h3>
      <ul>
        <li>full courses</li>
        <li>projects</li>
        <li>certification</li>
        <li>job placements</li>
        <li>24/7 support</li>
      </ul>
      <p>
        <a href={`/Payment?amount=90&plan=premium`}>Choose Plan</a>
      </p>
      <div className="price">
        <span></span>90<span>/mo</span>
      </div>
    </div>
  </div>
</section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">Books</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">pen</a></li>
                <li><a href="#">pencil</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
  <div className="icon-link">
    <i className="fa fa-instagram"></i> {/* Instagram icon */}
  </div>
  <div className="icon-link">
    <i className="fa fa-twitter"></i> {/* Twitter icon */}
  </div>
  <div className="icon-link">
    <i className="fa fa-whatsapp"></i> {/* WhatsApp icon */}
  </div>
  <div className="icon-link">
    <i className="fa fa-facebook"></i> {/* Facebook icon */}
  </div>
</div>

            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default Home;
