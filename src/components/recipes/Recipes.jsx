
import Navbar from "../Navbar";
import { useContext } from "react"
import { ContextData } from "../context/ContextApi"
import { AiFillClockCircle } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Recipes(){

    const usingContext = useContext(ContextData);

    return(
        <div>
            <Navbar />
            <div className="flex flex-col gap-3 p-3 ">
                <h1 className="mt-15 mb-3 ">Our Recipes Page</h1>
                <div className="flex flex-col justify-center items-center font-semibold capitalize ">
                    <div className="flex flex-wrap gap-3 justify-center items-center ">
                        {
                            usingContext.map((item) => {
                                if(item.category === "breakfast"){
                                    return(
                                        <Link key={item.id} to={`/recipes/${item.id}`}>
                                            <div className="flex flex-col gap-2 bg-[#937bff77] p-2 rounded-md ">
                                                <img src={item.imgUrl} className="w-[12rem] h-[12rem] rounded-md " alt="" />
                                                <p>{item.name}</p>
                                                <div className="flex items-center gap-1 ">
                                                    <div className="flex items-center gap-1 ">
                                                        <p>{item.time}</p>
                                                        <button className="border-0 text-xl "> <AiFillClockCircle /> </button>
                                                    </div>
                                                    <div className="flex items-center gap-1 ">
                                                        <p>{item.category}</p>
                                                        <button className="border-0 text-xl "> <CiForkAndKnife /> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}