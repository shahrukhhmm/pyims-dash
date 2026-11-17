import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SliderComponent from '../SliderComponent'
import TournamentSlider from './TournamentSlider'
import backgroundVideo from '../../assets/vedios/IYM.mp4' // Adjust the path to your video file

const Tournaments5 = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video className="absolute mt-52 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-cover" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-white">
        <div className="bg-black bg-opacity-50 p-5 rounded-md">
          <div className="container mx-auto">
            <div className="text-center mt-28">
              <h1>Welcome TO IYMT</h1>
              <p className="mt-28">
                The Pakistan Mathematics Tournament (PCT), run by PYIMS, is a competition for high school and college students. It's all about solving real-world chemistry problems in a competitive setting. The top contestants get to represent Pakistan at the International Mathematics Tournament. It's a chance for them to learn more about chemistry and improve their presentation skills on a global stage.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-60">
          <SliderComponent />
        </div>
        <div className="container mx-auto">
          <div className="text-center py-4 mt-5">
            <h1 className="text-white text-3xl">Our Partners</h1>
          </div>
        </div>
        <TournamentSlider />
        <Footer />
      </div>
    </div>
  )
}

export default Tournaments5
