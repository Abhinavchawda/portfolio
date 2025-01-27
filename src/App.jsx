import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import ProjectSlider from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className="overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar />
      <Home />
      <div className="border-y border-blue-500"><Education /></div>
      <div className="border-b border-blue-500"><ProjectSlider /></div>
      <Skills />
      <Footer />
    </div >
  )
};