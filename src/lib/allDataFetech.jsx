export const products = async ()=>{
 const res = await fetch("http://localhost:5000/products")
 const data = await res.json()
 return data
}


// export const limitedProducts = async ()=>{
//  const res = await fetch("http://localhost:5000/products?_limit=4")
//  const data = await res.json()
//  return data
// }