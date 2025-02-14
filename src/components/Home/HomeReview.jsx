
import { ReviewData } from "../data/Review.js"

export default function HomeReview(){
    return(
        <div className="flex flex-col justify-center items-center gap-3 ">
            <h1 className="text-left text-2xl capitalize ">simple and tasty recipes</h1>
            <p className="w-[30rem] sm:w-[70%] text-center font-semibold ">Effortless culinary delights to elevate your everyday cooking. Discover Quick, delicious meals that will impress your guests and make every meal a special occasion.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-3 ">
                {
                    ReviewData.map((item) => {
                        return(
                            <div key={item.id} className="w-[15rem] flex flex-col text-center items-center gap-2 p-2 ">
                                <img src={item.imgUrl} className="w-[10rem] h-[10rem] rounded-md p-1" alt="" />
                                <h3 className="uppercase ">{item.name}</h3>
                                <p className="text-xs font-semibold">{item.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
