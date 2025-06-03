import LogoSection from './sections/LogoSection.jsx'  
import NavBar from './components/NavBar.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <LogoSection /> */}
      <ShowCaseSection />
      <FeatureCard />
      <ExperienceSection />
    </>
  )
}

export default App
