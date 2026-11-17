import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from './TournamentSlider'
import './Common.css'
const Tournaments2 = () => {
  return (
    <div>
      <div>
      <Navbar/>
    <div className="tournament1">
      <Hero />
     <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="overlay text-center">
        <h1>Welcome TO IYNT</h1>
        <p className='mt-5'>The International Young Naturalists’ Tournament(IYNT) is chapter of International young naturalist tournament(IYNT),  designed for students aged 12 to 16 who have a strong interest in natural sciences. In this competition, teams come together to work collaboratively, compete, and solve complex scientific problems across various fields, including physics, chemistry, biology, and interdisciplinary subjects. Notably, Team Pakistan achieved a Bronze medal in the 11th IYNT held in Almaty, Kazakhstan, demonstrating the nation’s excellence on the global stage.
        </p>
      </div>
        </div>
      </div>
     </div>
    </div>
    <div className="mt-5">
   <SliderComponent/>
   </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='heading mt-5 py-4'>
            <h1 className='text-white text-center'>Our Partners</h1>
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

export default Tournaments2
