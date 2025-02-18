
import { AiFillClockCircle } from "react-icons/ai"
import { CiForkAndKnife } from "react-icons/ci";
import { useContext, useState } from "react"
import { ContextData } from "../context/ContextApi.jsx";

export default function HomeReview(){

    const usingContext = useContext(ContextData);

    const [items, setItems] = useState(usingContext);

    const filterItem = (categItems) => {
        const updatedItems = usingContext.filter((elem) => {
            return elem.category === categItems;
        });

        setItems(updatedItems);
    };

    return(
        <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="flex flex-col gap-3 justify-center items-center ">
                <h1 className="text-left text-2xl capitalize ">simple and tasty recipes</h1>
                <p className="w-[25rem] sm:w-[70%] text-center font-semibold ">Discover Quick, delicious meals that will impress your guests and make every meal a special occasion.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <ul className="bg-[#937bff77] p-2 rounded-md flex gap-2 capitalize font-semibold">
                    <li className="hover:bg-white hover:text-black transition-all p-2 rounded-md cursor-pointer "
                    onClick={() => setItems(usingContext)}>All</li>
                    <li className="hover:bg-white hover:text-black transition-all p-2 rounded-md cursor-pointer " 
                    onClick={() => filterItem("breakfast")} >breakfast</li>
                    <li className="hover:bg-white hover:text-black transition-all p-2 rounded-md cursor-pointer " 
                    onClick={() => filterItem("fastfood")} >fast food</li>
                    <li className="hover:bg-white hover:text-black transition-all p-2 rounded-md cursor-pointer " 
                    onClick={() => filterItem("snacks")} >snacks</li>
                    <li className="hover:bg-white hover:text-black transition-all p-2 rounded-md cursor-pointer " 
                    onClick={() => filterItem("dinner")} >dinner</li>
                </ul>
                <div className="flex flex-wrap md:flex-nowrap md:grid md:grid-cols-3 justify-center items-center gap-3 ">
                    {
                        items.map((item) => {
                            if(item.show === "home"){
                                return(
                                    <div key={item.id} className="capitalize font-semibold flex flex-col gap-2 justify-center w-[15rem] h-[18rem] rounded-md p-2 bg-[#937bff77] ">
                                        <img className="h-[70%] rounded-md" src={item.imgUrl} alt="" />
                                        <h3>{item.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <button className="border-0 text-xl "> <CiForkAndKnife /> </button>
                                                <p>{item.time}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <button className="border-0 text-xl "> <AiFillClockCircle /> </button>
                                                <p>{item.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
