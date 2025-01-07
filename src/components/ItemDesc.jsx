import "./ItemDesc.css";
import star from "./star.png";
import delivery from "./delivery.png";
import returns from "./return.png";
import waranty from "./waranty.png";

export default function ItemDesc({close, product}) {

    return(
        <div className="itembg">
            <div className="itembox">
                <img src={product.image}></img>
                <div>
                    {console.log(product)}
                    <span><h2>{product.title}</h2>By {product.brand}</span>
                    <span style={{ display: 'flex', alignItems: 'center', margin: "1px"}}>
                        <img 
                            src={star} 
                            alt="star Icon" 
                            style={{ width: '20px', height: 'auto', margin: "1px" }} 
                        /> {product.rating}
                    </span><br/>
                    <h3>$ {product.price}</h3><br/>
                    <span style={{ display: 'flex', alignItems: 'center', margin: "1px" }}>
                        <img 
                            src={delivery} 
                            alt="star Icon" 
                            style={{ width: '20px', height: 'auto' }} 
                        /> {product.delivery}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', margin: "1px" }}>
                        <img 
                            src={waranty} 
                            alt="star Icon" 
                            style={{ width: '20px', height: 'auto' }} 
                        /> {product.waranty}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', margin: "1px" }}>
                        <img 
                            src={returns} 
                            alt="star Icon" 
                            style={{ width: '20px', height: 'auto' }} 
                        /> {product.returns}
                    </span>
                    <p>{product.desc}</p>
                    <button onClick={() => close(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}