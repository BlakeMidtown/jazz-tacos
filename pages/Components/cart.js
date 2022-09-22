import React, { useState, useEffect } from "react";
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

  function Cart({ cart, setCart, handleChange ,handleRequest }) {
  const [price, setPrice] = useState(0);
  console.log(cart)
  const router= useRouter()


  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans +=  item.qty*item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });  

  // Makes a POST request to localhost:3000/orders. When successful, returns 
  // the d

  // function handleRequest(e) {
  //   e.preventDefault();    
  //   fetch("http://localhost:3000/orders", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({name: JSON.stringify(cart.map((item) => (item)))}),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((r) => {router.push("/success") });
  //     } else {
  //       //Display errors
  //       res
  //         .json()
  //         .then((data) =>
  //           setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //         );
  //     }
  //   })   
  // }

  return (
    
    <div>             
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
            <h2 className="title"> Qty: {item.qty} </h2>
            </div>  
            </div>            
          </div>
          <div>
            
          </div>
        </div>
        
        
      ))}
      <div className="row">
        <div className="paddingleft">
          <h2>Total: $ {price}</h2>
        </div>
        <div className="paddingright">
     <    button onClick={handleRequest} className="buttonpink">Checkout</button>
     </div>
     </div>    
    </div>
    
  );
};

export default Cart;