import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductsCard from '../../components/ProductsCard'

export default function CategoryProduct() {
 const {name} = useParams()
 const [products, setProducts] = useState([])
  
 useEffect(()=>{
    async function fetchProducts(){
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data =await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  },[])
  
    return (
    <div>
        <ProductsCard products={products} />
    </div>
  )
}
