import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import ScrollProgress from "../components/ScrollProgress"
import ParticlesBackground from "../components/ParticlesBackground"
import GithubStats from "../components/GithubStats"
import Leetcode from "../components/Leetcode"
import ScrollTop from "../components/ScrollTop"
function Home() {

  return (
     <div className="bg-black min-h-screen overflow-hidden relative text-white">
        <ParticlesBackground />
      {/* BACKGROUND BLOBS */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <ScrollTop />
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
     

      {/*<Experience />*/}

      <Certifications />
      <GithubStats />

      <Leetcode />  

      <Contact />

      <Footer />
      <ScrollProgress />  
    </div>
    
  )
}


export default Home