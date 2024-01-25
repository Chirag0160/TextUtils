import React from 'react'
import '../style/Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export default function Footer() {
  return (
    <div className='footer-bg'>
         <div className="Footer-button-container">
            <button ><FacebookIcon /></button>
            <a href="https://www.linkedin.com/in/chirag-maheshwari-4b3116236/"><button ><LinkedInIcon /></button></a>
            <a href="https://github.com/Chirag0160"><button><GitHubIcon /></button></a>
            <button><GoogleIcon /></button>
         </div>
    </div>
  )
}
