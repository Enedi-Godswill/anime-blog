
import { Link } from "react-router-dom"
import { AiOutlineFacebook } from "react-icons/ai"
import { MdClose, MdMenu } from "react-icons/md"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useState } from "react"


export default function Navbar(){

    const [menu, setMenu] = useState(false)
    
    const toggleBtn = () => {
        setMenu((currentState) => (!currentState));
    }

    const [bgChange, setBgChange] = useState(false);
    
    const toggleBg = () => {
        setBgChange((currentState) => (!currentState));
    }
    
    const [menuBorder, setMenuBorder] = useState(false);

    window.addEventListener("scroll", () => {
        if(window.scrollY >= 30){
            setMenuBorder(true);
        } else {
            setMenuBorder(false);
        }
    })

    return(
        <div className={`fixed bg-white top-0 left-0 w-full flex justify-between items-center p-2 ${menuBorder ? "border-b-2 border-b-gray-700 " : "border-0" } `}>
            <h3>Savor</h3>
            <ul className={`absolute bg-white flex flex-col top-14 w-full p-2 rounded-md gap-2 text-xl font-semibold capitalize sm:flex sm:flex-row sm:static sm:text-sm ${menu ? "flex" : "hidden" } `}>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/recipes">recipes</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
            <div className="flex justify-center items-center gap-2 ">
                <button className="text-black rounded-full p-1 " > <AiOutlineFacebook /> </button>
                <button className="border-black text-black p-1 w-[5rem] ">
                    <Link to="/contact">lets talk</Link>
                </button>
            </div>
            <div className="flex items-center ">
                <button onClick={toggleBtn} className="transition-all cursor-pointer border-none text-3xl flex sm:hidden">
                    {menu ? <MdClose /> : <MdMenu /> }
                </button>
                <button onClick={toggleBg} className={`transition-all cursor-pointer border-none text-3xl flex sm:hidden ${bgChange ? "" : "" } `}>
                    {bgChange ? <MdLightMode /> : <MdDarkMode /> }
                </button>
            </div>
        </div>
    )
}
