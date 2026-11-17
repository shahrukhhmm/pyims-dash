import React from 'react'
import logo from '../../imgs/logo2.png'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
 

const Dropdownpage2 = ({setdropdown, servicelogo, servicedetail, services,name}) => {
  return (
    <div 
      className={`dropdown overflow-y-auto  fixed top-[25%] flex rounded-lg transition-all left-0 z-[20] pointer-events-none bg-[#ffffffec] w-[100%] justify-between min-h-[65%] max-md:flex-col max-md:w-[60%] max-md:top-[13%]`} 
      onMouseLeave={() => setdropdown(false)}
    >
      <div className='w-[50%] dropleft max-md:w-[100%] '>
        <div className='w-[100%] h-[25%] flex mt-4 items-center'>
          <img src={logo} alt="" className='h-[100%] mx-4 object-cover max-md:w-[30%]' />
          <p className='text-black text-6xl'>|</p>
          <img src={servicelogo} alt="" className='h-[70%] w-[20%] object-cover rounded-lg max-md:w-[30%]' />
        </div>
        <div className='mx-4 my-2 text-justify text-black h-[25%]'>
          <p>{servicedetail}</p>
        </div>
        <div className="h-[50%] ">
          <button className='bg-gray-400 text-white px-5 py-2 text-2xl mx-3 rounded-lg my-2 border-black outline-black'>
            <FaHome />
          </button>
        </div>
      </div>
      <div className='w-[50%] mr-5 flex flex-col items-center max-md:w-[100%]'>
        <h1 className='text-black text-2xl font-medium py-2 '>{name}</h1>
        
        <div className='flex flex-wrap overflow-y-auto max-h-40 w-full px-2 max-md:justify-center'>
          
          {services.map((_, index) => (
         <NavLink to={_.link} className={'cursor-pointer'}>

         <div key={index} className='border-black outline-black cursor-pointer bg-slate-400 rounded-lg h-14 min-w-44 flex mx-1 items-center px-3 my-2 max-md:my-0 max-md:gap-0'>
              <img src={_.src} alt="" className='object-cover cursor-pointer h-[70%] bg-gray-400 mx-1 inline-block' />
              <p className='text-black inline-block cursor-pointer text-2xl w-auto'>{_.name}</p>
            </div>
            </NavLink> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdownpage2
