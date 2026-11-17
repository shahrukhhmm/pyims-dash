import React, { useEffect, useState } from 'react'
import './dropdown.css'
import logo from '../../imgs/logo2.png'
import about from './images/aboutus.png'
import aboutbg from './images/aboutusbg.png'
import { FaHome } from 'react-icons/fa'
const Dropdownpage1 = ({setdropdown,servicelogo,servicedetail,servicebg}) => {
 
  

  return (
    <div className={`dropdown fixed top-[25%] flex rounded-lg pointer-events-none transition-all left-0 z-[20] bg-[#ffffffec] w-[100%] justify-between min-h-[65%] bg-opacity-5 max-md:flex-col max-md:w-[60%] max-md:top-[13%]  `} onMouseLeave={()=>setdropdown(false)}  >
        <div className='w-[60%] dropleft max-md:w-[100%] '>
        <div className='w-[100%] h-[25%] flex mt-4 items-center'>
    <img src={logo} alt="" className='h-[100%] mx-4 object-cover max-md:w-[30%] ' />
    <p className='text-black text-6xl'>|</p>
    <img src={servicelogo} alt="" className='h-[70%] w-[20%] object-cover rounded-lg max-md:w-[30%]' />
 </div>

 <div className='mx-4 my-2 text-justify text-black h-[25%]'>
    <p>{servicedetail}</p>
 </div>
 <div className="h-[50%] ">
    <button className='bg-gray-400 text-white px-5 py-2 text-2xl mx-3 rounded-lg my-2 border-black outline-black'><FaHome/></button>
    <button></button>
    <button></button>
 </div>
        </div>
<div className='w-[30%]  mr-5  flex items-center max-md:w-[100%]'>
    <img src={servicebg} alt="" className='h-[90%] rounded-lg w-[100%] object-cover ' />
    
</div>
    </div>
  )
}

export default Dropdownpage1