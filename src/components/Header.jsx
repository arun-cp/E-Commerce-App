import '../App.css';
import cart from "./shopping-cart.png";

export default function Header({click, countfn}) {
    let count = 0;
    for(let i=0 ; countfn[i]!=null ; i++) {
        count = count + countfn[i].count;
    }
    return (
        <div className="head">
            <h1>Header</h1>
            <button onClick={click}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={cart} 
                        alt="Cart Icon" 
                        style={{ width: '20px', height: 'auto' }} 
                    />  Cart ({count})
                </span>
            </button>
        </div>
    )
}