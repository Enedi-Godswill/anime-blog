
import { Link } from "react-router-dom"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"
import { MdClose, MdMenu } from "react-icons/md"
import { useState } from "react"


export default function Navbar(){

    const [menu, setMenu] = useState(false)
    const [menuBorder, setMenuBorder] = useState(false);

    const toggleBtn = () => {
        setMenu((currentState) => (!currentState));
    }

    window.addEventListener("resize", () => {
        if(window.screenY >= 15 ){
            console.log("passed 15")
        } else {
            console.log("keep going")
        }
    })

    return(
        <div className="fixed top-0 left-0 w-full flex justify-between items-center p-2 ">
            <h1>Savor</h1>
            <ul className={`absolute flex flex-col right-5 top-14 bg-white p-2 rounded-md gap-2 text-3xl font-semibold capitalize sm:flex sm:static sm:flex-row sm:text-sm ${menu ? "flex" : "hidden" } `}>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/reviews">reviews</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
            <div className="flex items-center gap-2 ">
                <button className="text-blue-600 rounded-full p-1 " > <AiOutlineFacebook /> </button>
                <button className="text-blue-600 rounded-full p-1 " > <AiOutlineInstagram /> </button>
                <button className="text-blue-600 rounded-full p-1 " > <AiOutlineYoutube /> </button>
                <button className="border-blue-500 p-1 ">lets talk</button>
            </div>
            <button onClick={toggleBtn} className="cursor-pointer border-none text-3xl flex sm:hidden">
                {menu ? <MdClose /> : <MdMenu /> }
            </button>
        </div>
    )
}
