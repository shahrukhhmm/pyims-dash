import React from 'react'
import './signin.css'
import { TbMailFilled } from "react-icons/tb";
import{ FaUser ,FaLock} from 'react-icons/fa'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
 

const Signin = ({darkmode,setdarkmode}) => {
  return (
    <>
    <Navbar/>
    <Hero darkmode={darkmode} />
  <div id='back-sign'>
<div className="wrapper">

    <form action="submit">
        <h1>Log in</h1>
        <div className="inputbox">
            <input type="text" placeholder='Email' required  /> <TbMailFilled className='icon'/>
        </div>
        <div className="inputbox">
            <input type="password" name="" id=""placeholder='Password' required />
            <FaLock className='icon'/>
        </div>
        <div className="rememberforgot">
            <label ><input type="checkbox" name="" id="" />Remember me</label>
            <a href="#">Forgot Password?</a>
        </div>
        <button type='submit'>Sign in</button>
        <div className="registerlink">
            <p>Don't Have an account? <Link to='/signup'>Register</Link></p>
        </div>
    </form>
</div>
</div>
    </>
  )
}

export default Signin