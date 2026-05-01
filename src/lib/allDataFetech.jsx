// export const products = async ()=>{
//  const res = await fetch("http://localhost:5000/products")
//  const data = await res.json()
//  return data
// }
import db from '../../db.json'

export const products = async () => {
  return db.products
}