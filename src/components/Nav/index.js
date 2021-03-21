import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

function Nav() {

      
    return (
      
      
        <nav>
           <div className="icon-box">
            <h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillGithub/></h3>
            <h3 style={{fontSize: "30px", opacity: "70%"}}><GrDocumentText/></h3>
            <h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillLinkedin/></h3>
            
          </div>
          <ul>
            <li> PROJECTS </li>
            <li> ABOUT </li>
            <li> CONTACT </li>
          </ul>
         
        </nav>
      
    );
  }

export default Nav;




