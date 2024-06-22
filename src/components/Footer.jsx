import React from 'react'
import yellowLine from "../assets/images/yellowLine.png"
import footerDecImg from "../assets/images/footerDecImage.png"
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <img src={yellowLine} alt='Yellow Line 1' className='w-100' />
            <div className='footer-content-container'>
                <img src={footerDecImg} alt='Footer Dec Img' className='img-fluid' />
                <div>
                    <div>
                        <h5 className='follow-us-text'>Follow us on</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <FaInstagram className="footer-icon" />
                        <FaYoutube className="footer-icon" />
                        <FaTwitter className="footer-icon" />
                        <FaFacebook className="footer-icon" />
                        <FaLinkedin className="footer-icon" />
                    </div>
                </div>
                <img src={footerDecImg} alt='Footer Dec Img' className='img-fluid' />
            </div>
            <img src={yellowLine} alt='Yellow Line 1' className='w-100' />
        </div>
    )
}

export default Footer