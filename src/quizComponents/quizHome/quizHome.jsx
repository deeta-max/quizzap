import React from "react";
import Cards from "../cards/Cards";
import Section from "../section/Section";
import "./quizHome.css";

function quizHome(){
    return(
        <div className="quizHome">
        <div className="quizHome-top">
        <div className="quizHome-top-card">
        <div className="home-join">
            <input className="quizHome-input" type="text" placeholder="Enter a join code " />
            <button className="quizHome-button">JOIN</button>
          </div>
        </div>
        <div className="quizHome-top-card">
        <div className="home-streak">
           <h4>Hello, Guest</h4>
          </div>
          
          <h6>0-day Streak</h6>
          <p>Start your streak, play now!</p>
        </div>
        </div>
        <Section />
        <Section />
        </div>
    );
};

export default quizHome;