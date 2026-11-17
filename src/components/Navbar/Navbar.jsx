import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../imgs/pyimslogo.png';
import { FaUser, FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiFileDownloadFill } from "react-icons/ri";
import axios from 'axios';
import aboutlogo from './Dropdownpages/images/aboutus.png'
import aboutbg from './Dropdownpages/images/aboutusbg.png'
import blogbg from './Dropdownpages/images/blogbg.png'
import communitybg from './Dropdownpages/images/communitybg.png'
import tournamentlogo from './Dropdownpages/images/tournamnetslogo.png'
import bloglogo from './Dropdownpages/images/bloglogo.png'
import communitylogo from './Dropdownpages/images/communitylogo.png'
import programslogo from './Dropdownpages/images/programslogo.png'
import t1 from '../imgs/img3.png'
import t2 from '../imgs/img4.png'
import t3 from '../imgs/img5.png'
import t4 from '../imgs/img6.png'
import t5 from '../imgs/img5.png'
import t6 from '../imgs/img6.png'
import t7 from '../imgs/img5.png'
import t8 from '../imgs/img6.png'
import t9 from '../imgs/img5.png'
import "./Navbar.css";
import Dropdownpage1 from './Dropdownpages/Dropdownpage1';
import Dropdownpage2 from './Dropdownpages/Dropdownpage2';

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutdropdown,setaboutdropdown]=useState(false)
  const [community,setcommunity]=useState(false)
  const [blog,setblog]=useState(false)
  const [tournaments,settournaments]=useState(false)
  const [programs,setprograms]=useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.style.backgroundColor = "#000810";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "#F5F5F5";
      body.style.color = "black";
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);


  window.addEventListener('click',()=>{
    setblog(false)
    setcommunity(false)
    settournaments(false)
    setblog(false)
    setaboutdropdown(false)
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mypyims.curiositylabpakistan.com/apis/tournament_pdf.php', {
          headers: {
            "content-type": "application/json"
          }
        });
        setapidata(response.data);
        if (response.data.length > 0) {
          setFileUrl(`https://mypyims.curiositylabpakistan.com/uploads/${response.data[0].file_name}`);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);

 
let tournamentsdata=[
  {
  name:"IYPT",
  src:t1,
  link:'/IYPT'
},

  {
  name:"IYNT",
  src:t2,
  link:'/IYNT'
},
{
  name:"ICHTO",
  src:t3,
  link:'/ICHTO'
},
{
  name:"IYBT",
  src:t4,
  link:'/IYBT'
},
  {
  name:"IYMS",
  src:t5,
  link:'/IYMS'
},

 

  {
  name:"IYMT",
  src:t6,
  link:'/IYMT'
},
{
  name:"IYET",
  src:t7,
  link:'/IYET'
},
{
  name:"WEC",
  src:t8,
  link:'/WEC'
},
{
  name:"WYCD",
  src:t9,
  link:'/WYCD'
},
 
]
let programssdata=[
  {
  name:"ICRP",
  link:'/ICRP'
},
  {
  name:"Karwan e Justuju",
  link:'/'
},
  {
  name:"Awami Webinars",
  link:'/'
},
]

  return (
    <div className='navbar text-white'>
      <div className='flex justify-between px-4 md:px-8 py-4 md:py-6 items-center'>
        <div className='flex items-center'>
          <img src={img} alt="Logo" className="w-18 h-18 rotating-logo -mr-36" id='logo' />
          <h1 className="text-sm md:text-lg font-bold ml-2 md:ml-4 text-left " id='logonext'>
           <NavLink to={'/'} className={'text-white cursor-pointer'}>Pakistan Young Innovative Minds</NavLink> 
          </h1>
        </div>
        <div className='flex items-center lg:hidden'>
          <button onClick={toggleMenu} className='text-3xl' id='hamburger'>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`flex-col lg:flex-row lg:flex items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:block`} >
          <ul className='flex flex-col md:flex-row md:items-center md:ml-auto list-none' id='navbaricons'>
            <li className='mt-2 md:mt-0 md:ml-4 p-2 md:p-3 navlink'>
              <NavLink to="/" exact className='navlink'>Pyims</NavLink>
            </li>

            <li className='mt-2 md:mt-0 md:ml-4 p-2 md:p-3 navlink'>
              <NavLink to="/about" className='navlink'
              onMouseOver={()=>{setaboutdropdown(true)
                setprograms(false)
                setblog(false)
                setcommunity(false)
                settournaments(false)
               }}  onClick={()=>setaboutdropdown(prev=>!prev)}>About</NavLink>
               {aboutdropdown && (<Dropdownpage1 setdropdown={setaboutdropdown} servicelogo={aboutlogo} servicedetail={'        Pakistan Young Innovative Minds (PYIMS) is an initiative that likely focuses on fostering creativity, innovation, and leadership skills among young individuals in Pakistan.    '}
               servicebg={aboutbg}
               />) }
             
            </li>
            <li className='relative mt-2 md:mt-0 md:ml-4 p-2 md:p-3'
              onMouseEnter={() => setIsDropdownOpenTournaments(true)}
              onMouseLeave={() => setIsDropdownOpenTournaments(false)}>
              <NavLink to="" className='navlink'
                onMouseOver={()=>{setcommunity(false)
                  settournaments(true)
                  setprograms(false)
                
                  setaboutdropdown(false)
                  setblog(false)
                }} onClick={()=>setcommunity(false)}
              >Tournaments</NavLink>

              {tournaments && <Dropdownpage2 setdropdown={settournaments} services={tournamentsdata} name={'Tournaments'}
              servicelogo={tournamentlogo}
              servicedetail={'Our tournaments are carefully designed to inspire participants, showcase their talents, and help them learn through exciting challenges. These events are open to students, professionals, and enthusiasts from various fields, ensuring a platform for growth and collaboration.'}
              />}
            </li>
            <li className='relative mt-2 md:mt-0 md:ml-4 p-2 md:p-3'
              onMouseEnter={() => setIsDropdownOpenPrograms(true)}
              onMouseLeave={() => setIsDropdownOpenPrograms(false)}>
              <NavLink to="" className='navlink'
              
              onMouseOver={()=>{
                setcommunity(false)
                setprograms(true)
                setaboutdropdown(false)
                settournaments(false)
                setblog(false)
              }} onClick={()=>setprograms(false)}
              >Programs</NavLink>
              {programs && <Dropdownpage2 setdropdown={setprograms}
              servicedetail={'At Pakistan Young Innovative Minds (PYIMS), we are dedicated to empowering youth through impactful and engaging initiatives. Our three flagship programs are designed to foster innovation, critical thinking, and community engagement.'}
              services={programssdata}
              servicelogo={programslogo}
              name={'Programs'}
              />}
            </li>
            <li className='mt-2 md:mt-0 md:ml-4 p-2 md:p-3'>
              <NavLink to="/communitys" className='navlink'
                onMouseOver={()=>{setcommunity(true)
                  setaboutdropdown(false)
                  setprograms(false)
                  settournaments(false)
                  setblog(false)
                }} onClick={()=>setcommunity(false)}
              >Community</NavLink>
              {community && (<Dropdownpage1 setdropdown={setcommunity}
              servicelogo={communitylogo}
              servicebg={communitybg}
              servicedetail={`Together, We Can Innovate and Inspire
The PYIMS community is more than just a group; it’s a movement. Together, we aim to empower youth, spark innovation, and drive meaningful change in society.

Join us today and be a part of this transformative journey!

`}
              />) }
            </li>
            <li className='mt-2 md:mt-0 md:ml-4 p-2 md:p-3 navlink'>
              <NavLink to="/blogs" className='navlink'
                 onMouseOver={()=>{setcommunity(false)
                  setblog(true)
                  settournaments(false)
                  setprograms(false)
                  setaboutdropdown(false)
                }} onClick={()=>setblog(false)}
              >Blogs</NavLink>
                 {blog && (<Dropdownpage1 setdropdown={setblog} 
                 servicelogo={bloglogo}
                 servicebg={blogbg}
                 servicedetail={'The blog section of PYIMS serves as a platform for sharing knowledge, experiences, and insights. It’s a space where our community can learn, grow, and connect through written content.'}
                 />) }
            </li>
            <a href='https://pyimsportal.com/'>
              <div className='person'>
                <button className='signup'><FaUser /><span>Sign up</span></button>
              </div>
            </a>
            <a href='https://pyimsportal.com/'>
              <div className='person'>
                <button className='signup'><FaUser /><span>Sign In</span></button>
              </div>
            </a>
            <div>
              <button className='changingmode' onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
