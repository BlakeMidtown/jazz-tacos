import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Taco from "./Components/Taco";
import Cart from "./Components/cart";
import { Router,Route, Routes, Switch } from 'react-router-dom';
import { useRouter } from 'next/router'


export default function App() {  
  const [tacodata, setTacoData] = useState([])  
  const [cart, setCart] = useState([]);  
  const [price, setPrice] = useState(0);
  
 
  useEffect(() => {setCart(cart)},[price])

  useEffect(() => {
    fetch(`http://localhost:3000/tacos`)
    .then(r => r.json())
    .then(data => setTacoData(data))},[])
    const renderLinks = tacodata.map((taco) => (
      <Taco cart={cart} tacodata={tacodata} key={taco.id} taco={taco} handleClick={handleClick} handleRemove={handleRemove}/>
      ))
 
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

  function handlePrice () {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const router= useRouter()

  function handleRequest(e) {
    e.preventDefault();    
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: JSON.stringify(cart.map((item) => (item)))}),
    }).then((res) => {
      if (res.ok) {
        res.json().then((r) => {router.push("/success") });
      } else {
        //Display errors
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    })   
  } 
  
  return (
    <div>
      <div className="header">Jazz Taco's</div>   
       <ul>
        <div className="row">
          <div className="col-2">
            <div className="row">       
            {renderLinks}
            </div> 
          </div >
          <div className="col-1">  
            <Cart  handleRequest={handleRequest} cart={cart} setCart={setCart} handleChange={handleChange}/>
          </div>  
        </div >      
      <div className="grid"> 
      </div>
      </ul>
    </div>   
    );
  }
