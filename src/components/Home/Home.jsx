
import img1 from "../assets/food8.jpg"
import { Link } from "react-router-dom"
import mainImg from "../assets/cooking-table.jpg"

export default function Home(){
    return(
        <div className="w-full h-screen flex flex-col text-white font-semibold sm:flex-row justify-center items-center gap-3 p-5 bg-cover bg-no-repeat bg-center " style={{backgroundImage:`url(${mainImg})`}} >
            <div className="w-full sm:w-[50%] flex flex-col gap-3 ">
                <div className="flex items-center gap-1 ">
                    <hr className="border-2 rounded-xs w-[4rem] " />
                    <p>welcome</p>
                </div>
                <h1>Spicy delicious afang soup</h1>
                <p>Food gives you an experience, one that satiates your hearts desire. Join me as i journey to find out the story behind the foood you love.</p>
                <div className="flex items-center gap-3 ">
                    <button className="w-30 rounded-md p-1 bg-blue-600 border-0 text-white hover:text-black hover:bg-white hover:border-blue-600 transition-all ">
                    <Link to="/recipes">View recipes</Link>
                    </button>
                    <button className="w-30 rounded-md p-1 bg-white text-black border-0 hover:bg-blue-600 hover:text-white transition-all ">
                    <Link to="/about">learn more</Link>
                    </button>
                </div>
            </div>
            <div className="w-[40%] sm:w-[70%] md:w-[50%] lg:w-[40%] ">
                <img src={img1} className="rounded-md md:w-[90%] lg:w-[70%] " alt="" />
            </div>
        </div>
    )
}
