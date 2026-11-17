import React, { useState,useEffect } from 'react'
import './blogs.css'
 
import axios from 'axios'
import Blogscard from './Blogscard';
import Navbar from './Navbar';
import Hero from '../Hero/Hero';
 
const Blogs = ({darkmode,setdarkmode}) => {
  const [apidata, setapidata] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mypyims.curiositylabpakistan.com/apis/blogs.php', {
          headers: {
            "content-type": "application/json"
          }
        });
        setapidata(response.data); // Update the state with the actual data
      } catch (err) {
  console.warn(err)
      }
    };

    fetchData();
  }, []);  
console.log(apidata)
 
 

  return (
    <>
    <Navbar darkMode={darkmode} setDarkMode={setdarkmode}/>
    <Hero darkmode={darkmode}/>
    <div className="blogs-page">
      <header className="header">
        <h1 style={{color:"black"}}>Community Blogs</h1>
        <p>Stay updated with the latest news, stories, and tips from our community.</p>
      </header>
      
      <section className="blog-posts">
        <h2>Latest Posts</h2>
        {apidata.map((item)=>(   <div className="post">
          <h3>{item.title}</h3>
          <p> {item.content}</p>
          <img src={`https://mypyims.curiositylabpakistan.com/uploads/${item.img}`} />
        </div>)
        
    
        )}
        
      </section>
      
      <section className="recent-posts">
        <h2>Recent Posts</h2>
        <ul>
          <li><a href="https://www.instagram.com/p/C9tlE1KN8XR/?igsh=MWFvcmdtZ2g4ODBraA==">Team Pakistan </a></li>
          <li><a href="/blog/https://www.instagram.com/p/C9moZvytUgg/?igsh=MXQwM2gxcDlsdGhteQ==">Celebrarting Incredible journey</a></li>
          <li><a href="https://www.instagram.com/p/C9Uy-cnNgcy/?igsh=MXdnaW9tNjRvcWxncA==">Allied Bank</a></li>
          <li><a href="/https://www.instagram.com/p/C9FKUQgPf02/?igsh=ZWRlaDBiMTl5cDNw/post4">The Tentative Calendar</a></li>
          <li><a href="https://www.instagram.com/p/C865uhztXl-/?igsh=YXZwNjFoMjZucTRx">Ranking of our winners</a></li>
        </ul>
      </section>
    </div>
    </>
  )
}

export default Blogs