
import Home from "./components/Home/Home"
import HomeReview from "./components/Home/HomeReview"
import Navbar from "./components/Navbar"
import Favourites from "./components/Home/Favorites.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeReview />
      <Favourites />
      <Footer />
    </div>
  )
}

export default App
