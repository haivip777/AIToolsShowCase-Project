import gpt3logo from '../../assets/ailogo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img className='logo-white' src={gpt3logo} alt="logo" />
          <p>haidep777 Hanoi, Vietnam. All rights reserved.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>haidep777 Hanoi, Vietnam</p>
          <p>+84 369 017 983</p>
          <p>luuconghai0104@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
          <p>© {new Date().getFullYear()} haidep777. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer