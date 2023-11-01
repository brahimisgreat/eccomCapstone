import React, { useState } from 'react'
import ProductsCard from '../../components/ProductsCard'
import FeatureCard from '../../components/FeatureCard'
import { useEffect } from 'react'



export default function Productss() {

  const [category, setCategory] = useState([])

  useEffect(()=>{
    async function fetchCategory(){
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data =await response.json()
      console.log(data)
      setCategory(data)
    }
    fetchCategory()
  },[])
  


  return (
    <div>
    <FeatureCard  cards={category}/>
   <ProductsCard />
    </div>
  )
}
