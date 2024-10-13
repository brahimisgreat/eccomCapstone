import React, { useEffect, useState } from 'react'
import ProductsCard from '../ProductsCard'
import FeatureCard from '../FeatureCard'

export default function Categories() {
  
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
      <div className='flex flex-col border'>
      <FeatureCard cards={category}/>
      
      </div>
    )
}
