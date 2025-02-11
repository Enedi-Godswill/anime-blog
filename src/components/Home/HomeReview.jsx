
import { ReviewData } from "../data/Review.js"

export default function HomeReview(){
    return(
        <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="flex justify-around gap-2 p-2 ">
                <h1>latest reviews</h1>
                <button>view all</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 w-full ">
                {
                    ReviewData.map((item) => {
                        return(
                            <div key={item.id} className="flex flex-col justify-center items-center gap-2 p-2 ">
                                <img src={item.imgUrl} className="w-[20rem] h-[15rem] rounded-md p-1" alt="" />
                                <h3 className="uppercase ">{item.name}</h3>
                                <p>{item.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
