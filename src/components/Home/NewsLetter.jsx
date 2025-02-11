
export default function NewsLetter(){
    return(
        <div className="w-full h-[30vh] sm:h-[40vh] flex flex-col justify-center items-center gap-3 p-3 ">
            <h1>Join our mailing list</h1>
            <p className="capitalize text-xl font-semibold ">sign up and get all the latest, ad-free reviews, recipes and menus sent to your inbox.</p>
            <div className="flex items-center gap-1">
                <input type="text" placeholder="Email address" />
                <button className="bg-blue-500 text-white font-semibold ">subscribe</button>
            </div>
        </div>
    )
}
