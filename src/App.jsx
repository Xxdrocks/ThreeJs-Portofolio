import LogoSection from './sections/LogoSection.jsx'  
import NavBar from './components/NavBar.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Techstack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <ShowCaseSection />
      <FeatureCard />
      <ExperienceSection />
      <Techstack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
