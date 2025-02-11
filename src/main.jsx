import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// other pages
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Reviews from "./components/Reviews.jsx"
import Signup from "./components/Signup.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/", element:<App />, errorElement:<div>404 Not Found</div> },
  {path:"/about", element:<About />, errorElement:<div>404 Not Around</div> },
  {path:"/contact", element:<Contact />, errorElement:<div>404 Not Found</div> },
  {path:"/reviews", element:<Reviews />, errorElement:<div>404 Not Found</div> },
  {path:"/signup", element:<Signup />, errorElement:<div>404 Not Found</div> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
