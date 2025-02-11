
import Home from "./components/Home/Home"
import HomeReview from "./components/Home/HomeReview"
import Navbar from "./components/Navbar"
import Favourites from "./components/Home/Favorites.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeReview />
      <Favourites />
    </div>
  )
}

export default App
