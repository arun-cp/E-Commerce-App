import logn from './loginimage.jpg';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import './Login.css';
import headerimg from './header.png';
import headergif from './head.gif';

export default function Login() {
    const uname = useRef();
    const pwd = useRef();
    const navigate = useNavigate();
    function Credential() {
        console.log(uname);
        console.log(pwd);
        if(uname.current.value == "react" && pwd.current.value == "acabes")
            navigate("/Home");
        else
            alert("WRONG");
    }
    return(
        <div className="LoginPage">
            <div className='Login'>
                <div className='Ltitle'><img style={{ width: '6%', height: 'auto' }} src= {headergif}></img><img src= {headerimg}></img></div>
                <br/><h3>User Login</h3>
                <hr />
                <label>UserName :<br/>
                    <input type="text" ref={uname} required />
                </label><br/>
                <label>Password :<br/>
                    <input type="password" ref={pwd} required />
                </label><br/><br/>
                <button onClick={Credential}>Login</button>
            </div>

        </div>
    );
}