import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import Cart from './components/Cart';
import Order from './components/Order';
import ItemDesc from './components/ItemDesc';
import Login from './components/Login';
let clickedprod = {};

function Home() {
  const [products, setProducts] = useState([]);
  const [cartclick, setcartclick] = useState(false);
  const [orderclick, setorderclick] = useState(false);
  const [cartitem, updatecartitem] = useState([]);
  const [itemclick, setitemclick] = useState(false);
  
  function itemclicked(item) {
    setitemclick(true);
    clickedprod = item;
    console.log(clickedprod);
  }

  return (
    <div className="App">
      <Header click={setcartclick} countfn={cartitem} />
      <ListItems products={products} setProducts={setProducts} cartitem={cartitem} updatecartitem={updatecartitem} itemclicked={itemclicked} />
      {cartclick ? <Cart cartitem={cartitem} updatecartitem={updatecartitem} close={setcartclick} order={setorderclick} /> : null}
      {orderclick ? <Order close={setorderclick} cart={setcartclick} /> : null}
      {itemclick ? <ItemDesc close={setitemclick} product={clickedprod}  /> : null}
    </div>
  );
}

export default Home;