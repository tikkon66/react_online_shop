import { useEffect, useState } from "react";
import { subscribeToProducts } from "../../services/firebaseService";

function SimpleProductCard() {
  const [products, setProducts] = useState([])

  useEffect(() => { // почему используется 
    const unsub = subscribeToProducts(setProducts)
    return () => unsub()
  },[])
  
  return (
    products.map(p => {
      return (
      <div>
        <img src={p.image}/>
        <h3>{p.title}</h3>
        <p> {p.price}</p>
      </div>

      )
    })
  )
    
}

export default SimpleProductCard