
import { Favourites } from "../data/Favorites"

export default function Favorites(){
    return(
        <div className="flex flex-col justify-center items-center p-2 mt-5 mb-3 ">
            <h1>my favourites</h1>
            <h3 className="mb-4">Foods i will recommend to my viewers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
                {
                    Favourites.map((item) => {
                        return(
                            <div key={item.id} className="flex flex-col items-center w-[15rem] gap-2 p-2 rounded-lg " >
                                <img src={item.imgUrl} className="rounded-md w-[12rem] h-[8rem] " alt="" />
                                <h4 className="font-semibold capitalize text-xl">{item.name}</h4>
                                <p className="font-semibold">{item.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
