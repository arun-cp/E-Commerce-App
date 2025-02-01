import "./Cart.css";
import ifg from "./shopping-cart.gif";

export default function Cart({cartitem, updatecartitem, close, order}) {
    function countupdate(title, action) {
        const newcart = cartitem.map((test) => {
            if(test.ctitle === title){
              if(action===0)
                test.count = test.count-1;
              else if(action===1)
                test.count = test.count+1;
            }
            return(test);
        }).filter((test) => test.count > 0);
        updatecartitem(newcart);
    }
    let total = 0;
    for(let i=0 ; cartitem[i]!= null ; i++){
        total = total + (Number(cartitem[i].count) * Number(cartitem[i].price) );
    }
    return(
        <div className="cartbg">
            <div className="cartbox">
                <h2 >CART</h2>
                <hr/>
                {cartitem.length === 0 ? <p>Cart is Empty</p> : null}
                {
                    cartitem.map((item) => (
                        <div className="cartitem">
                            <div className="cartin">
                                {console.log(item.image)}
                                <img src={item.image}></img>
                                <h4>{item.ctitle}</h4>
                                <h4>$ {Number(item.count) * Number(item.price)} </h4>
                            </div>
                            <div className="cartupd">
                                <button onClick={() => countupdate(item.ctitle, 0)}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => countupdate(item.ctitle, 1)}>+</button>
                            </div>
                        </div>
                    ))
                }
                <br></br>
                <div className="carttail">
                    <h3>Grand Total : $ {total}</h3>
                    <div>
                        <button onClick={() => close(false)}>Close</button>
                        <button onClick={() => {
                            close(false);
                            order(true);
                        }}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}