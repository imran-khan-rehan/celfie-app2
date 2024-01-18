import React from 'react';
import { useState, useEffect } from 'react';
import Arrow from '../assets/icons/arrow-left.png';
import Right from '../assets/icons/arrow-right.png';
import profile_image from "../assets/icons/Ellipse 5.png";
import Mask from '../assets/icons/Mask.png';
import Chat from '../assets/icons/chat.png';
import idea from '../assets/icons/idea.png';
import Learn from '../assets/icons/learn.png';
import Gift from '../assets/icons/gift.png';

const profile = ({ setprofile, name, desc, imgName }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [profileImage2, setProfileImage2] = useState(null);

    useEffect(() => {
        // Dynamically import the profile image based on profileName
        if (imgName) {
            import(`../assets/Celebrity-profiles/${imgName}.png`)
                .then((module) => setProfileImage(module.default))
                .catch((error) => {
                    console.error(`Error loading profile image for ${name}:`, error);
                });
            import(`../assets/Celebrity-profiles/${imgName}@2x.png`)
                .then((module) => { setProfileImage2(module.default); console.log(module); })
                .catch((error) => {
                    console.error(`Error loading profile image for ${name}:`, error);
                });
        }
    }, [imgName]);
    return (
        <>
            <div className="profile-section-mb h-screen ">
                <div className="profile-header" style={{ background: `linear-gradient(0deg, #0A0F1F 0%, rgba(10, 15, 31, 0.00) 72.93%), url(${profileImage2}), lightgray 50%` }} >
                    <div onClick={() => setprofile(false)} className=" cursor-pointer profile-back-arrow">
                        <img src={Arrow} alt="Back Arrow" />
                    </div>

                    <div style={{ backgroundImage: `url(${profileImage})` }} className="profile-icon">
                        {/* <img src={profileImage} alt="Profile Icon" /> */}
                    </div>
                </div>

                <div className="below-header">
                    <div className="profile-header-bottom">
                        <h2>{name} !</h2>
                        <p>{desc}</p>
                    </div>

                    <div className="sub-talk-btn">
                        <a href="#">
                            <img src={Mask} alt="Subscribe Icon" />
                            <p>Subscribe</p>
                        </a>
                        <a href={`/chatPage/${name}`}>
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
                            <img src={Right} alt='gift icon' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default profile;
