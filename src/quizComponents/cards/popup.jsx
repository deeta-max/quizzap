import React, { useState } from 'react';
import Modal from 'react-awesome-modal';

function PopupBox(props) {
    const [constructor, setConstructor] = useState(false);



        return (
            <section>
                <div type="button"  onClick={() => setConstructor(true)} >
                <div className="cards">
            <img className="cards-image" src={props.image} alt="logo" />
            <div className="cards-para">
            <p>{props.slides} Slides</p>
            <p>{props.plays} plays</p>
            </div>
            
            <h4>{props.topic}</h4>
            </div>
                </div>
                <Modal 
                    visible={constructor}
                    width="500"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() =>setConstructor(false)}
                >
                    <div className="cards">
                    <img className="cards-image" src={props.image} alt="logo" />
                    <div className="cards-para">
                    <p>{props.slides} Slides</p>
                    <p>{props.plays} plays</p>
                    </div>
                    <p>Difficulty level: Medium
                       Sample Questions:
 
                        1. Simplify by combining like terms:
                           5a + 2b - 3a + 4
                        2. Collect like terms: 
                          4y + 8d - 2y + 3d
                        3.
                         5a + 2a + 2a </p>
                         <button>Practice</button>
                         <button>Challenge friends</button>
                    </div>
                   
                </Modal>
            </section>
        );
    }


export default PopupBox;