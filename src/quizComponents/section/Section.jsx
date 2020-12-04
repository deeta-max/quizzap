import React from "react";
import Cards from "../cards/Cards";
import "./Section.css";

function Section(){
    return(
        <div className="section">
        <h2>Section Name</h2>
        <div className="section-card">
            <Cards image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"} />
            <Cards image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"} />
            <Cards image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"} />
            <Cards image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"} />
            <Cards image={"https://image.shutterstock.com/image-photo/-260nw-1117974122.jpg"} plays={"13"} slides={"5"} topic={"Math Math"} />

            </div>
        </div>
    );
};

export default Section;