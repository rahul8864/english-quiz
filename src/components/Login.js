import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function Login() {
    const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const history = useNavigate();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'email@email.com',
        password: 'password123'
    }

    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
       
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        history("/quiz", { replace: true });
    } else {
        alert(`Use This Email Or PassWord \n Email: 'email@email.com' \n Password: 'password123'`);
    }
}
  return (
    <div className='d-flex flex-col justify-content-center card align-items-center' style={{width:"100%",height:"100vh"}}>
    <div className="login-page justify-content-center card p-5" style={{maxWidth:"500px",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <h2>Login In</h2>
    <form autoComplete="off" onSubmit={handleLoginSubmit} action='/quiz'>
        <div className="form-group">
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={emailInput}
            onChange={handleEmailChange}
            />
        </div>
        <div className="form-group">
            <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordInput}
            onChange={handlePasswordChange}
            />
        </div>
        <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center ml-3">
            Submit
        </button>
  </form>
</div>
    </div>
    
  )
}
