import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from './TournamentSlider'
import './Common.css'
const Tournaments6 = () => {
  return (
    <div>
      {/* <Hero/> */}
      <div>
      <Navbar/>
    <div className="tournament1">
      {/* <Hero /> */}
     <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="overlay text-center">
        <h1>Welcome TO WEC</h1>
        <p className='mt-5'>The Pakistan WEC Tournament, run by PYIMS, is a competition for high school and college students. It's all about solving real-world WEC problems in a competitive setting. The top contestants get to represent Pakistan at the International WEC Tournament. It's a chance for them to learn more about Economics and improve their presentation skills on a global stage.

        </p>
      </div>
        </div>
      </div>
     </div>
    </div>
    <SliderComponent/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='heading mt-5 py-4'>
            <h1 className='text-white text-center'>Our Collaborter And Sponsord</h1>
          </div>
        </div>
      </div>
    </div>
    <TournamentSlider />
    <Footer/>
    </div>
    </div>
  )
}

export default Tournaments6;
