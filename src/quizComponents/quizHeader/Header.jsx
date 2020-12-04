import React from "react";
import "./Header.css";

function Header(){
    return(
        <div className="header-quiz">
        <div className="header-quiz-leftSide">
          
          <i className="fab fa-2x fa-quinscape"></i>
          
          <div className="header-search">
            <input className="header-input" type="text" placeholder="Find a quiz" />
            <i class="fas fa-search"></i>
          </div>
          <div className="header-option">
          <i className="fas fa-home"></i>
          <p>HOME</p>
          </div>
          <div className="header-option">
          <i className="fas fa-history"></i>
          <p>History</p>
          </div>
          </div>
          <div className="header-quiz-rightSide">
            <button className="button1">Sign In</button>
            <button className="button2">Sign Up</button>
          </div>
         
    
        </div>
    );
};

export default Header;