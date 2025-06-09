import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import FeatureCard from "./sections/FeatureCard"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCard />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
