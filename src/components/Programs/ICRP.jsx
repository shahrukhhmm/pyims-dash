import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from '../Tournaments/TournamentSlider'
import backgroundVideo from '../../assets/vedios/ICRP.mp4'; // Adjust the path to your video file
import '../../components/Tournaments/Common.css'

const ICRP = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video className="absolute mt-52 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-cover" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <Navbar/>
      
      <div className="relative z-10">
        <div className="tournament1">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="bg-black bg-opacity-50 p-5 rounded-md text-center mt-44">
                  <h1 className="text-white">ICRP</h1>
                  <p className='text-white mt-5'>
                    ICRP, a PYIMS initiative, is dedicated to fostering scientific curiosity and understanding. The project aims to integrate science into daily life by hosting interactive science demonstrations in public spaces, such as parks, for both children and adults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto'>
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

export default ICRP
