import React,{useState,useEffect} from 'react'
import './community.css'
import axios from 'axios'
import gori from '../imgs/React-app.jpg'
import kaala from '../imgs/kaala.jpg'
import gora from '../imgs/gora.jpg'
import Navbar from './Navbar'
import Hero from '../Hero/Hero'
const Community = ({darkMode,setDarkMode}) => {
 
  const [apidata, setapidata] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mypyims.curiositylabpakistan.com/apis/cummunity.php', {
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
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
   <Hero darkmode={darkMode}/>
    <div className="community-page" >
      <header className="header">
        <h1 style={{color:"black"}}>Community</h1>
        <p>Join our community and participate in exciting tournaments designed to showcase your skills and help you grow!</p>
      </header>
      
      <section className="featured-posts">
        <h2>Upcoming Tournaments</h2>
        {apidata.map((item)=>(  <div className="post">
          <h3>{item.name}</h3>
          <p> {item.achievements}</p>
        </div>)


        )}
       
      </section>
      
      <section className="members">
        <h2 style={{color:"white"}}>Meet Our Stars</h2>
        <div className="member">
          {/* <img src={kaala} alt="Alex Johnson" /> */}
          {/* <p>Alex Johnson</p> */}
        </div>
        <div className="member">
          {/* <img src={gori} alt="Maria Williams" />
          <p>Maria Williams</p> */}
        </div>
        <div className="member">
          {/* <img src={gora} alt="David Brown" />
          <p>David Brown</p> */}
        </div>
      </section>
</div>
    </>
  )
}

export default Community