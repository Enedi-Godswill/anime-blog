import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// other pages
import About from "./components/About/About.jsx"
import Contact from "./components/Contact.jsx"
import Recipes from "./components/recipes/Recipes.jsx"

// Context Api Page

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ContextData } from './components/context/ContextApi.jsx'
import { FoodData } from './components/data/Data.js'
import { RecipeInfo } from './components/recipes/RecipeInfo.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App />, errorElement:<div>404 Not Found</div> },
  {path:"/about", element:<About />, errorElement:<div>404 Not Around</div> },
  {path:"/contact", element:<Contact />, errorElement:<div>404 Not Found</div> },
  {path:"/recipes", element:<Recipes />, errorElement:<div>404 Not Found</div> },
  {path:"/recipes/:id", element:<RecipeInfo />, errorElement:<div>404 Not Found</div> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextData.Provider value={FoodData}>
      <RouterProvider router={router} />
    </ContextData.Provider>
  </StrictMode>
)
