import React, { useState } from 'react'
import '../shopmart/Shopmart.css'
import useFetch from '../../hooks/useFetch';


const Shopmart = () => {
//0) use this state to be use for the calling of api 

//const [products, setProducts] = useState([]); not needed after using usefetch, u can now assign products to the data directly
// console.log(product)

//1)<span>{product.in_stock ?"in stock" :"unavailable"}</span> because of the boolean within this api

const [url, setUrl] = useState("http://localhost:8000/products")
const {data : products, loading} = useFetch(url);
//2) useEffect(()=>{
//     fetch(url)
//     .then(response=>response.json())
//     .then(data=>setProducts(data));
// },[url])


//3) usecallback which would allow a function to work under it, we are using this because in case the fetch is outside the use effect so as to handle the side effect
//of the fetch called upon, a usecallback is used to handle the async await which also comes with a dependency


//4) this is the usecallback which accomodates the url as its dependency, the fetchProduct will be acommodated by the useeffect to avoid side effects

// const fetchProduct = useCallback(async ()=> {
//     const response = await fetch(url);
//     const data = await response.json();
//     setProducts(data)
// },[url])


//5) the useeffect here is used to handle the fetchProduct because it is outside the use effect and also a dependency 

// useEffect(()=>{
// fetchProduct()
// },[fetchProduct])


//6) lets look at making use of custom hook to fetch api, why?
 
  return (
    <>
       <h1 style={{textAlign:'center'}}>Product List</h1>
        <section>
            <div className='filt'>
                <button onClick={()=>setUrl("http://localhost:8000/products")} className='allstock'>All</button>
                <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")} className='only-instock'>In Stock Only</button>
            </div>
            {loading && <p style={{textAlign:'center'}} >loading.......</p>}
            {products && products.map((product)=>(
                <div className='card' key={product.id}>
                    <p className='tag'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span>{product.price}Naira</span>
                        <span className={product.in_stock ?"instock" :"unavailable"}>{product.in_stock ?("In Stock") :("Unavailable")}</span>
                    </p>
                </div> 
            ))}
        </section>
    </>
  )
}

export default Shopmart