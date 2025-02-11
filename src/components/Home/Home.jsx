
import img1 from "../assets/one-punch.jpg"

export default function Home(){
    return(
        <div className="w-full h-screen flex flex-col sm:flex-row justify-center items-center gap-3 p-5 ">
            <div className="w-full sm:w-[50%] flex flex-col gap-3 ">
                <div className="flex items-center gap-1 ">
                    <hr className="border-2 rounded-xs w-[4rem] " />
                    <p>welcome</p>
                </div>
                <h1>I am Enedi Godswill</h1>
                <h3>Anime Lover and Programmer </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cupiditate ab asperiores. Dolorum eum perspiciatis, dolor enim laudantium consequatur ab quam?</p>
                <button className="w-30 rounded-md p-1 ">learn more</button>
            </div>
            <div className="w-[40%] sm:w-[70%] md:w-[50%] lg:w-[40%] ">
                <img src={img1} className="rounded-md md:w-[90%] lg:w-[70%] " alt="" />
            </div>
        </div>
    )
}