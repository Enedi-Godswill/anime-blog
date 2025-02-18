
import mainImg from "../assets/cute.jpg"

export function Advert(){
    return(
        <div className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-3 p-3 sm: ">
            <div className=" sm:w-[40%] flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col gap-3 p-2 ">
                    <h2>Everyone can be a chef in their own kitchen</h2>
                    <p>Discover fancy delicious recipes to unleash your cutlery skills and make every meal a masterpiece.</p>
                </div>
                <button className="w-[22%] bg-black text-white hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all ">learn more</button>
            </div>
            <div className="w-[50%] sm:w-[40%] md:w-[30%] ">
                <img src={mainImg} className="rounded-md w-[80%] " alt="" />
            </div>
        </div>
    )
}
