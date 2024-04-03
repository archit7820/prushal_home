import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <div className="footer_class">
    <footer className="Footer">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>
        <h3>Prushal Technologies</h3>
        <div className="Column">
          <h4>Our Team</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Our Team</p>
        <p>What We Do</p>
      </div>
      <div className="Column">
        <h4>More</h4>
        <p>Projects</p>
        <p>Events</p>
        <p>Blog</p>
        <p>Donate</p>
      </div>
      <div className="Column">
        <h4>Connect</h4>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
      </div>
      <div className="Subscribe">
        <h2>Subscribe to get latest updates</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit"><b>Subscribe</b></button>
        </form>
      </div>
    </footer>
    </div>
  );
}

