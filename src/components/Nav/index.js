
//import React, {useState} from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";


function Nav({toggleModal}) {


  //const [isResumeOpen, setIsResumeOpen] = useState(false);


     
    return (
      
    <>
        <nav>
           <div className="icon-box">
            <a href='https://github.com/Kristy-coding'><h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillGithub/></h3></a>
            <a href='https://www.linkedin.com/in/kristyzurmuhlen/'><h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillLinkedin/></h3></a>
            <h3 className = "doc-icon"style={{fontSize: "30px", opacity: "70%"}} onClick={toggleModal}><GrDocumentText/></h3>
            
          </div>
          <ul>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#about'>ABOUT</a> </li>
            <li><a href="#contact-form">CONTACT </a></li>
          </ul>
         
        </nav>

        
    </>
       
      
    );
  }

export default Nav;




