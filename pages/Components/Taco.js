import React from "react";
import { useState, useEffect } from "react";
import styles from '/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

function Taco({taco, handleClick, handleRemove, cart, tacodata}) {
  const [count, setCount] = useState(0);
  const elementa = <FontAwesomeIcon icon={faPlusCircle}/>
  const elementb = <FontAwesomeIcon icon={faMinusCircle}/>
   

  return (
   
        <div className="card">
          <div className="row">
            <div className="col-1a">
              <img className="image" src="https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg"></img>                  
            </div>
            <div className="col-2a">
              <div className="left">
                <h1 className="h4">{taco.title} </h1>
                <h2 className="elpis">{taco.description}</h2>
                <p className="text">{cart.qty}</p>             
              </div>
            </div>                        
          </div>
          <div className="center">
                <div className="grid">
                  <button className="button" onClick={() => handleClick(taco, 1)}>{elementa}</button>
                  <h1>{(cart.find((x) => (x.id === taco.id)))? (cart.find((x) => (x.id === taco.id))).qty : 0}</h1>
                  <button className="buttonr" onClick={() => handleRemove(taco, -1)}>{elementb}</button>
                </div>
          </div>
       </div>  
  );
}

export default Taco;

