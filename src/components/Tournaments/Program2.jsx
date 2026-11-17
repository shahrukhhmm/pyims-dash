import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from './TournamentSlider'
import './Common.css'
import Karwanejustujuslider from '../Karwanejustujuslider'
const Program2 = () => {
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
        <h1>Karwaan-e-Justaju </h1>
        <p className='mt-5'> Karwaan-e-Justaju, a PYIMS initiative, is dedicated to fostering scientific curiosity and understanding. The project aims to integrate science into daily life by hosting interactive science demonstrations in public spaces, such as parks, for both children and adults.

        </p>
      </div>
        </div>
      </div>
     </div>
    </div>
    <Karwanejustujuslider/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='heading mt-5 py-4'>
            <h1 className='text-white text-center'>Our Collaborators And Sponsors</h1>
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

export default Program2;
