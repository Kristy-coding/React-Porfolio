import React from 'react';
import profilepic from '../../assets/images/portfolio-pic.jpg'


function About () {
    return (
        <div id= "about" className="about-me-container">
            <h3>ABOUT ME...</h3>
            <img className="profile-pic" src={profilepic} alt="profile pic"/>
            <p>     I am a full stack developer leveraging a dynamic professional, and academic background. Educational experiences include four years as a student-athlete at Stanford University and recent completion of UPenn LSP School’s Full Stack Development Bootcamp. In this intense 24 week program I was able to develop strong skills in HTML, CSS, JavaScript, Node, Express, React, Handlebars, Bootstrap, MongoDB, Sequelize, and MySQl. I was also introduced to many other frameworks and libraries. 
             </p>
             <p>
             As a professional I approach every challenge with a growth mindset. I value hard work, resiliency, and collaboration. Years of professional experience as an athlete, coach and mentor combined with my strong problem solving skills and analytical mindset have positioned me to be a strong contributor to any engineering team. Looking forward to my next opportunity! 
             </p>
        </div>
        
    );
}

export default About;