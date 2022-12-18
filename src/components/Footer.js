import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <TwitterIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <FacebookIcon onClick={() => window.open('https://www.google.com', '_blank')} />
            <LinkedInIcon onClick={() => window.open('https://www.google.com', '_blank')} />
        </div>
        <p> &copy; 2022 site.com</p>
    </div>
  )
}

export default Footer;