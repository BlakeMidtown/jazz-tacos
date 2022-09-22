import React, { useState, useEffect } from "react";
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

  function Cart({ show, cart, setCart, handleChange ,handleRequest, handlePrice, price }) {
  // const [price, setPrice] = useState(0);
  console.log(cart)
  const router= useRouter()


 

  return (
    
    <div className="color">             
      {cart.map((item) => (
        <div className="cardcart" key={item.id}>                 
          <div className="row">
            <div className="col-1a">
               <img className="image" src="https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg"></img>                  
            </div>
            <div className="col-2a">
              <div className="left">               
                <h4 className="h4">{item.title} </h4>            
                <h2 className="elpis">{item.description}</h2>
              </div>
                <h2 className="center"> Qty: {item.qty} </h2>  
            </div>            
          </div>          
        </div>
        
        
      ))}
      <div className="row">
        <div className="paddingleft">
          <div className={show ? "notshowing" : "sdfdf"}>
            <h2>Total: $ {price}</h2>
          </div>
        </div>
        <div className={show? "subcenter": "paddingright"}>
          <button onClick={handleRequest} className="buttonpink">{show? "Submit Order" : "Checkout"}</button>
        </div>
      </div>    
    </div>
    
  );
};

export default Cart;