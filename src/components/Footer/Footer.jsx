import React from "react";
import {FaWhatsapp,FaInstagram,FaYoutube,FaLinkedin}from 'react-icons/fa'

// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import iypt from '../imgs/img3.png'
import iynt from '../imgs/img4.png'
import iybt from '../imgs/img6.png'
import ichto from '../imgs/img5.png'
import img from '../imgs/logo2.png';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="lg:h-screen flex items-end justify-center">
    <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      {/* <div className="container pt-14">
        <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 py-14 px-10 rounded-2xl">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <h1 className="text-white text-4xl">Grow your business on CodePen. Your ultimate productivity tool</h1>
            </div>
            <div className="relative flex items-center justify-end">
              <div className="py-4 px-4 bg-black rounded-lg">
                <p className="text-white">Try 14 Days FREE</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-2">
              <div className="flex items-center">
              <img src={img} alt="Logo" className="w-18 h-18 rotating-logo" />
              </div>
              <p className="text-white mt-6">   Pakistan Young Innovative Minds</p>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase">Links</h4>
              <div className="mt-6 grid space-y-3">
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/">Home</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/about">About</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/touranment">Tournament</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/commuinty">Community</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/blogs">Blog</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/programs">Programs</Link></p>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase">Important Links</h4>
              <div className="mt-6 grid space-y-3">
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/IYPT"><span><img src={iypt} alt="" style={{width:"3vw"}} /></span>IYPT</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/IYNT"><span><img src={iynt} alt="" style={{width:"3vw"}} /></span>IYNT</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/IYBT"><span><img src={iybt} alt="" style={{width:"3vw"}} /></span>IYBT</Link></p>
                <p><Link className="inline-flex gap-x-2 text-white hover:text-gray-200" to="/IYMS"><span><img src={ichto} alt="" style={{width:"3vw"}} /></span>IYMS</Link></p>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase">Downloads</h4>
              <div className="mt-6 grid space-y-3">
                <img src="https://i.postimg.cc/43nhk9y7/store.png" className="h-12" alt=""/>
                <img src="https://i.postimg.cc/VkKbVRfP/google.png" className="h-12" alt=""/>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-400">
            <Link to='https://www.codesvista.com/' target="_blank" > @CopyRights-PYIMS</Link>  
              </p>
            </div>
            <div>
              <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="https://youtube.com/@pyims?si=1gevD4loaFpMvdnn" target="_blank" style={{fontSize:"1.2rem"}}>
               <FaYoutube/> 
              </a>
              <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="https://pk.linkedin.com/company/pakistan-young-innovative-minds-pyims" target="_blank" style={{fontSize:"1.2rem"}}>
                 <FaLinkedin/>
              </a>
              <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="https://www.instagram.com/pyims.official/https://www.instagram.com/pyims.official/" target="_blank"  style={{fontSize:"1.2rem"}}>
             <FaInstagram/>
              </a>
              <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary transition-all duration-300" href="#" style={{fontSize:"1.2rem"}}>
                
                <FaWhatsapp/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};


export default Footer;
