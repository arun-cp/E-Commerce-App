import { useEffect , useState } from "react";
import imagedummy from "./orsrc71709.png"
import './ListItems.css';
import star from "./star.png";

export default function ListItems({products, setProducts, cartitem, updatecartitem, itemclicked}) {
  
    useEffect(() => {
      async function fetchTasks() {
        try {
          const response = await fetch("https://dummyjson.com/products");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          const tasks = result.products.map((item) => ({
            title: item.title,
            desc: item.description,
            price : item.price,
            image : item.thumbnail,
            rating : item.rating,
            waranty : item.warrantyInformation,
            delivery : item.shippingInformation,
            returns : item.returnPolicy,
            brand : item.brand
          }));
          setProducts(tasks); 
          console.log(products)
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
      fetchTasks();
    }, []); 
    function addCart(title, price, image){
      let flag= false;
      const newcart = cartitem.map((test) => {
        if(test.ctitle == title){
          test.count = test.count +1;
          flag = true;
        }
        return(test);
      })
      /*const newcart = cartitem.map(task => {
          if(task.ctitle === title) {
              flag = true;
              return { ...task, count : task.count+1 };
          }
          return task;
      }); */
      
      console.log(newcart)
      if(flag){
        updatecartitem(newcart);
      } else {
        const citem = {
          ctitle : title,
          price : price,
          image : image,
          count : 1
        }
        updatecartitem([...cartitem, citem]);
        
      }
    }
  
    return (
      <div className="list">
        {
          products.map( (item) => {
            return(
              <div className="listitem" >
                <img src={item.image} alt="img" onClick={() => itemclicked(item) }></img>
                <h1 onClick={() => itemclicked(item) }>{item.title} </h1>
                <span >
                  <img 
                      src={star} 
                      alt="star Icon" 
                      style={{ width: '20px', height: 'auto' }} 
                  /> {item.rating}
                </span>
                <h3 style={{ color : "brown" }}>$ {item.price}</h3>
                <button onClick={() => addCart(item.title, item.price, item.image)}>Add to Cart</button>
              </div>
                )}) 
        }
      </div>
    )
}