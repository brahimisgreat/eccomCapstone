import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [bed, setBed] = useState()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  },[])

 

  const increase = (id) => {
    const updatedCart = cart.map(item =>{
        if(item.id === id){
            return {
                ...item,
                quantity: item.quantity + 1
            }
        }
        return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const decrease = (id) => {
    const updatedCart = cart.map(item =>{
        if(item.id === id){
            return {
                ...item,
                quantity: item.quantity - 1
                
            }
        }
        return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')    
}  

 function removeItem (id){
    const updatedCart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
 }

  return (
    <div className="dad">
    <div className="flex">
    <h1 className="text-4xl mb-5">shoping Cart</h1>
<h1 className="mx-20">Items:{cart?.length}</h1>
    </div>
    

   {
    cart?.map(car =>{
        return(
            <div className=" flex item-center container" key={car.id}>
      <div className=" flex items-center   container">
        
        <div className=" image-container max">
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-contain max-h-[600px]" src={car?.image} />
        </div>
        <div className="info-container">
            <h5>{car.title}</h5>
            <p>size: xl</p>
            <p>price: ${car?.price}</p>
            <button  className="btn btn" onClick={()=> increase(car?.id)}>
                +
            </button>
            <input className="mx-2 border text-center w-8" type='text'  placeholder={car?.quantity} value={car.quantity} onChange={(e)=> {
                setBed(e.target.value)
            }} />
            <button onClick={()=> decrease(car?.id)}>
                -
            </button>
            
        </div>
        <div className="quant-x"></div>
            <span>total:{car?.price *car.quantity}</span>
            <button  className="btn btn-blue" onClick={()=> removeItem(car?.id)}>Remove item</button>
        
      </div>
      <div className="order-summary">
                <h1>TOTAL:{total + 10}</h1>
      </div>
    </div>

        )
    })
   }
    </div>
  );
}
