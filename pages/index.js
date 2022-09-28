import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect,useContext } from 'react'
import Taco from "./Components/Taco";
import Cart from "./Components/cart";
import { Router,Route, Routes, Switch } from 'react-router-dom';
import { useRouter } from 'next/router'
import  AppContext   from '../context/state';


export default function App() {  
  const [tacodata, setTacoData] = useState([])  
  const [cart, setCart] = useState([]);  
  const [price, setPrice] = useState(0);
  const [show,setShow] = useState(false)
  const [errors, setErrors] = useState([]);
  const context = useContext(AppContext)
  // console.log(session)
//Use Effects  
  //sets cart when price updates
  useEffect(() => {setCart(cart)},[price])

  useEffect(() => {
    handlePrice();
    });   
  //gets data on page load
  useEffect(() => {
    fetch(`http://localhost:3000/api/menu`)
    .then(r => r.json())
    .then(data => setTacoData(data))},[])
    const renderLinks = tacodata.map((taco) => (
      <Taco cart={cart} tacodata={tacodata} key={taco.id} taco={taco} handleClick={handleClick} handleRemove={handleRemove}/>
      ))
//Functions 
  function handleClick(product)  {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {console.log(cart)
      setCart([...cart, { ...product, qty: 1 }]
        );
    }
  };
  
  function handleRemove(product) {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }; 

  function handleToCheckout() {
    setShow(true)
    console.log(show)
  } 

  function handleRequest(e) {
    e.preventDefault();    
    fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({order: (cart.map((item) => (item)))}),
    }).then((res) => {
      if (res.ok) {
        res.json().then((r) => {router.push("/success") });
      } else {
        //Display errors
        res
          // .json()
          // .then((data) =>
          //   setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          // );
          console.log("failed")
      }
    })   
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans +=  item.qty*item.price));
    setPrice(ans);
  };

  const router= useRouter()

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  return (
    <div className={context.session?"bkg":""}>
      <div className="row">
      <div className="header">Jazz Taco's</div>      
      <button className="lastbutton" onClick= {() => {context.setSession(!context.session)}}>{context.session?"Light mode": "Dark mode"}</button>
      </div>
       <ul>
        <div className="row">
          <div className="col-2">
            <div className={show ? "notshowing" : "row"}>                     
              {renderLinks}
            </div>
            <div className="centerb">
              <h1 className={show ? "" : "buttonblacksub"} >Total: ${price}</h1>
              <button onClick={handleToCheckout} className={show ? "notshowing" : "buttonpinksub"}>Checkout</button>
            </div> 
          </div >
          <div className={show ? "nowshowing" : "col-1"}>  
            <Cart show={show} price={price} handlePrice={handlePrice}  handleRequest={handleRequest} cart={cart} setCart={setCart} handleChange={handleChange}/>
          </div>  
        </div >      
        <div className="grid"></div>
      </ul>
    </div>   
    );
  }
  // {show ? "nowshowing" : "col-1"}
