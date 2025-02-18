
// Navbar Page
import Navbar from "../Navbar";
// Background Image
import mainImg from "../assets/chef1.jpg"
// React Icons
import { AiFillClockCircle } from "react-icons/ai"
import { CiForkAndKnife } from "react-icons/ci";
// UseContext API Page
import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
// Footer Page
import Footer from "../Footer";
// About Page Data
import { AboutData } from "../data/AboutPage";


export default function About(){

  const usingContext = useContext(ContextData);

  return(
    <div>
      <Navbar />
      <div className="w-full h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center bg-fixed " style={{backgroundImage:`url(${mainImg})`}} >
        <h2 className="capitalize ">Delicious food at your fingertips</h2>
      </div>

      {/* About Page Contents */}
      <div className="flex flex-col gap-3 p-2 mt-5">
        <h2>Welcome to Savor Food Blog.</h2>
        <div className="flex flex-col gap-3 p-2 ">
          {
            AboutData.map((item) => {
              return(
                <div key={item.id}>
                  <p>{item.info}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Best Products */}
      <div className="flex flex-col justify-center items-center gap-4 p-3">
        <h2>Our Best Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {
            usingContext.map((item) => {
              if(item.show === "best"){
                return(
                  <div key={item.id} className="flex flex-col rounded-md p-2 " >
                    <img src={item.imgUrl} className="w-[15rem] h-[12rem] rounded-md " alt="" />
                    <h3>{item.name}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 ">
                        <p>{item.time}</p>
                        <button className="border-0 text-xl " > <AiFillClockCircle /> </button>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <p>{item.category}</p>
                        <button className="border-0 text-xl " > <CiForkAndKnife /> </button>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

