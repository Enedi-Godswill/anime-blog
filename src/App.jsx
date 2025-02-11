
import Home from "./components/Home/Home"
import HomeReview from "./components/Home/HomeReview"
import Navbar from "./components/Navbar"
import Favourites from "./components/Home/Favorites.jsx"
import NewsLetter from "./components/Home/NewsLetter.jsx"
import Invite from "./components/Home/Invite.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeReview />
      <Favourites />
      <NewsLetter />
      <Invite />
      <Footer />
    </div>
  )
}

export default App
