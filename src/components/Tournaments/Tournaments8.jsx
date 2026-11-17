import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from './TournamentSlider'
import './Common.css'
const Tournaments8 = () => {
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
        <h1>Welcome TO WYCD</h1>
        <p className='mt-5'>WYCD is world Counsil for youth and Diplomacy, which PYIMS has Alliance for holding model United Nations

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

export default Tournaments8;
