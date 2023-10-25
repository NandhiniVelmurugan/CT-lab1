import React from 'react';
import './About.css'; // Import your CSS file
import NavBar from '../components/NavBar';
function App() {
  return (
    <header>
      <NavBar/>
      <main id="main">
        <section id="landing-section">
          <div>
            <h1>About Our LearnNest</h1>
            <p>Welcome to LearnNest, where the pursuit of knowledge meets limitless possibilities. We believe that education is the key to personal growth, professional success, and the enrichment of lives. Our journey began with a simple yet powerful vision: to empower learners of all backgrounds to thrive in a rapidly evolving world through accessible, innovative, and transformative education.
            </p>
          </div>
        </section>
        
        <section id="store-section">
          <p id="fresh-food-heading">Great Learning</p>
          <h3>Our LearnNest</h3>
          <p id="store-desc"></p>
          <div id="store-items-wrapper">
            <div className="store-item">
              <div className="icon-wrapper">
                <i className="fa fa-camera"></i>
              </div>
              <h3>New Courses</h3>
              <p>Use for cooking several types of vegetable oil.</p>
            </div>
            <div className="store-item">
              <div className="icon-wrapper">
                <i className="fa-rocket fa"></i>
              </div>
              <h3>Good Teaching</h3>
              <p>This is the best source of essential fatty acids for the body.</p>
            </div>
            <div className="store-item">
              <div className="icon-wrapper">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <h3>Sale</h3>
              <p>It is very good, if in the kitchen there will always be several bottles with different oils.
              </p>
            </div>
            <div className="store-item">
              <div className="icon-wrapper">
                <i className="fa fa-weixin" aria-hidden="true"></i>
              </div>
              <h3>Best Price</h3>
              <p>Remember that unrefined oils are not suitable for heat treatment.</p>
            </div>
          </div>
        </section>
        <section id="testimonials-section">
          <p className="testimonials-heading"></p>
          <h3>What our students say</h3>
          <p id="testimonials-desc">According to experts, any habit can be formed in 21 days. The same statement
            applies to reading</p>
          <div id="testimonials-wrapper">
            <div className="testimonial-item">
              
              <img src="https://mobirise.com/extensions/organicamp/assets/images/face5.jpg" alt="img1" />
              <p className="testimonial-message">Sales consultants are very polite. Many of the products have
                tried and are ready to prompt
                and recommend to customers. The staff shows that they completely share the philosophy of
                proper nutrition, if you can say so.</p>
              <h3 className="testimonial-by">John Mckenzie </h3>
              <p className="job-role"> Australia</p>
              <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
      </div>
            </div>
            <div className="testimonial-item">
              <img src="https://mobirise.com/extensions/organicamp/assets/images/face6.jpg" alt="img2" />
              <p className="testimonial-message">The assortment is very wide. From useful organic oils, cereals
                and teas to specific products for vegetarians, such as sausages and pies without meat.</p>
              <h3 className="testimonial-by">JIM CASH</h3>
              <p className="job-role">Seller</p>
              <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
      </div>
            </div>
            <div className="testimonial-item">
              <img src="https://mobirise.com/extensions/organicamp/assets/images/face7.jpg" alt="img3" />
              <p className="testimonial-message">I want to say a huge thank you to the management of the store and
                all its employees, I'm not a vegetarian, it would seem that the store is not for me, but
                it's not so, any person who comes here will find something useful.</p>
              <h3 className="testimonial-by">PETER GOODMAN</h3>
              <p className="job-role">Manager</p>
              <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
      </div>
            </div>
          </div>
        </section>
        <section id="follow-section">
          <div id="left-section">
            <img src="https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg" alt="fruit" />
          </div>
          <div id="right-section">
            <div id="text-wrapper">
              <h3>Follow Us</h3>
              <p>A wide range of products; many unusual and tasty products; courteous staff.</p>
              <input id="subscribe-email" placeholder="Your Email" />
              <input id="subscribe-btn" type="submit" value="Subscribe" />
            </div>
          </div>
        </section>
        <section id="stats-section">
          <div id="stats-wrapper">
            <div className="stats-item">
              <h3>7</h3>
              <p>Year of experiences</p>
            </div>
            <div className="stats-item">
              <h3>123k</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stats-item">
              <h3>72k</h3>
              <p>100% Satisfaction</p>
            </div>
            <div className="stats-item">
              <h3>13k</h3>
              <p>Detox Smoothies</p>
            </div>
          </div>
        </section>
        
       
      </main>
      
    </header>
  );
}

export default App;
