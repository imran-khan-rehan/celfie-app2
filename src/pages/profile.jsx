import React from 'react'
import Visa from '../assets/visa-mastercard-icon.png';

import Arrow from '../assets/icons/arrow-left.png';
import Right from '../assets/icons/arrow-right.png';
import Bg from "../assets/icons/bg.png";
import Ellipse from "../assets/icons/Ellipse 5.png";
import Mask from '../assets/icons/Mask.png';
import Taapsee from '../assets/icons/Taapsee Pannu.png';
import Chat from '../assets/icons/chat.png';
import idea from '../assets/icons/idea.png';
import Learn from '../assets/icons/learn.png';
import Gift from '../assets/icons/gift.png';

const profile = () => {
    return (
        <>
        <div className="profile-section-mb">
          <div className="profile-header">
            <div className="profile-back-arrow">
              <img src={Arrow} alt="Back Arrow" />
            </div>
    
            <div className="profile-icon">
              <img src={Ellipse} alt="Profile Icon" />
            </div>
          </div>
    
          <div className="below-header">
            <div className="profile-header-bottom">
              <h2>Urvashi Rautela</h2>
              <p>Filmmaker and television personality</p>
            </div>
    
            <div className="sub-talk-btn">
              <a href="#">
                <img src={Mask} alt="Subscribe Icon" />
                <p>Subscribe</p>
              </a>
              <a href="#">
                <img src={Chat} alt="Chat Icon" />
                <p>Talk to me</p>
              </a>
            </div>
    
            <div className="line"></div>
            <p className="pr-services">Premium Services</p>
    
            <div>
              <a href="#" className="services-btns">
                <img src={idea} alt="Idea Icon" />
                <p>Get advice from me</p>
                <img src={Right} alt="Chat Icon" />
              </a>
            </div>
            <div>
              <a href="#" className="services-btns">
                <img src={Learn} alt="Chat Icon" />
                <p>Learn from me</p>
                <img src={Right} alt="Learn Icon" />
              </a>
            </div>
            <div>
              <a href="#" className="services-btns">
                <img src={Gift} alt="Chat Icon" />
                <p>Here for you</p>
                {/* <img src="gift.png" alt="Gift Icon" /> */}
                <img src={Right} alt='gift icon'/>
              </a>
            </div>
          </div>
        </div>
        </>
      );
}
export default profile;
