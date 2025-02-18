
import Home from "./components/Home/Home"
import HomeReview from "./components/Home/HomeReview"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer.jsx"
import { Advert } from "./components/Home/Advert.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeReview />
      <Advert />
      <Footer />
    </div>
  )
}

export default App
