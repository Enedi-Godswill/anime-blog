
import { ReviewData } from "../data/Review.js"

export default function HomeReview(){
    return(
        <div className="flex flex-col gap-3 ">
            <h1>latest reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 ">
                {
                    ReviewData.map((item) => {
                        return(
                            <div key={item.id} className="flex justify-center items-center gap-2 border-2 border-gray-400 rounded-md " >
                                <img src={item.imgUrl} className="w-[50%] sm:h-[100%] rounded-md p-1" alt="" />
                                <div className="flex flex-col gap-2">
                                    <h3>{item.name}</h3>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
