import React from "react";
import Popup from "./popup";

import "./Cards.css";

function Cards(props){

    return(
        <div className="cards">
            <Popup image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"}  />
        </div>
    );
};

export  default Cards;