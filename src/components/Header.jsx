import '../App.css';
import cart from "./shopping-cart.png";
import headerimg from './header.png';
import headergif from './head.gif';

export default function Header({click, countfn}) {
    let count = 0;
    for(let i=0 ; countfn[i]!=null ; i++) {
        count = count + countfn[i].count;
    }
    return (
        <div className="head">
            <div className='title'><img style={{ width: '6%', height: 'auto' }} src= {headergif}></img><img src= {headerimg}></img></div>
            <button onClick={click}>
                <span style={{ display: 'flex', alignItems: 'center'}}>
                    <img 
                        src={cart} 
                        alt="Cart Icon" 
                        style={{ width: '18px', height: 'auto' }} 
                    />  Cart ({count})
                </span>
            </button>
        </div>
    )
}