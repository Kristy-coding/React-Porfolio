
//import React, {useState} from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";


function Nav() {


  //const [isResumeOpen, setIsResumeOpen] = useState(false);


  const handleClick = () =>{

  
    // is modal open starts as False so by using !isModalOpen we are setting the value to true??
    
      console.log('resume clicked!')

  };

      
    return (
      
    <>
        <nav>
           <div className="icon-box">
            <a href='https://github.com/Kristy-coding'><h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillGithub/></h3></a>
            <a href='https://www.linkedin.com/in/kristyzurmuhlen/'><h3 style={{fontSize: "30px", opacity: "70%"}}><AiFillLinkedin/></h3></a>
            <h3 style={{fontSize: "30px", opacity: "70%"}} onClick={handleClick}><GrDocumentText/></h3>
            
          </div>
          <ul>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#about'>ABOUT</a> </li>
            <li>CONTACT </li>
          </ul>
         
        </nav>

        
    </>
       
      
    );
  }

export default Nav;




