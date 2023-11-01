import React from 'react'
import '../components/css/Footer.css'
import logo from '../assests/logo.png';
import { FcAbout,FcServices,FcHome} from "react-icons/fc"
import { UilFacebookF,UilInstagramAlt,UilTwitter} from '@iconscout/react-unicons'
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="Logo">
        <h3><img src={logo} alt="" /></h3>
      </div>
      <div className="office">
        <h3>Office</h3>
        <ul>
          <li>Hat Factory Arts Centre Studio 7, 65-67 Bute St, Luton LU1 2EY, United Kingdom</li> 
        </ul>
        <ul>
          <li>info@dovelp.com</li>
        </ul>
      </div>
      <div className="Links">
        <h3>Links</h3>
        <ul>
        <li><FcHome className="nav-icon" /><a href="#" className="navlink">Home</a></li>
        <li><FcAbout className="nav-icon"/><a href="#" className="navlink">About Us</a></li>
       <li><FcServices className="nav-icon"/><a href="#" className="navlink">Services</a></li>
        </ul>
      </div>
      <div className="touch">
        <h3>Get In Touch</h3>
        <ul className="sociallinks">
          <a href="#" className="social-icon"><UilFacebookF/></a>
          <a href="#" className="social-icon"><UilInstagramAlt/></a>
          <a href="#" className="social-icon"><UilTwitter/></a>
        </ul>
      </div>
      <div className="copyright">
        <p> Dovelp Limited. © 2023. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
