import '../App.css';
import { useNavigate } from "react-router-dom";
import cart from "./shopping-cart.png";
import logout from "./logout.png";
import headerimg from './header.png';
import headergif from './head.gif';

export default function Header({click, countfn}) {
    const navigate = useNavigate();
    let count = 0;
    for(let i=0 ; countfn[i]!=null ; i++) {
        count = count + countfn[i].count;
    }
    return (
        <div className="head">
            <div className='title'><img style={{ width: '6%', height: 'auto' }} src= {headergif}></img><img src= {headerimg}></img></div>
            <div className='headright'>
                <button onClick={() => click(true)}>
                    <span style={{ display: 'flex', alignItems: 'center'}}>
                        <img 
                            src={cart} 
                            alt="Cart Icon" 
                            style={{ width: '18px', height: 'auto' }} 
                        />  Cart ({count})
                    </span>
                </button>
                <button onClick={() => navigate("/E-Commerce-App")}>
                    <span style={{ display: 'flex', alignItems: 'center'}}>
                        <img 
                            src={logout} 
                            alt="Cart Icon" 
                            style={{ width: '18px', height: 'auto' }} 
                        />  Log Out
                    </span>
                </button>
            </div>
        </div>
    )
}