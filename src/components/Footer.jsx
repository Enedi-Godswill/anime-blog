
export default function Footer(){
    return(
        <div className="bg-[#937bff77] rounded-t-4xl flex flex-col gap-3 p-3 justify-between items-center ">
            <h2>Deliciousness to your inbox</h2>
            <p className="font-semibold capitalize p-2">subscribe for mouthwatering recipes, culinary tips, and food inspiration. Delivered right to your Email.</p>
            <div className="bg-white flex justify-between p-2 gap-1 text-black rounded-md w-[25rem] ">
                <input className="w-[80%] placeholder-gray-900 capitalize font-semibold " type="text" placeholder="your email address" />
                <button className="bg-black text-white font-semibold ">subscribe</button>
            </div>
        </div>
    )
}
