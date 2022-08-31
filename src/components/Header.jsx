import { Fragment } from "react";

const Header = () => {
    return ( 
        <Fragment >
            <div className="text-black text-lg font-semibold flex flex-row justify-start items-center h-20 py-7 pb-1 container mx-auto max-w-5xl px-4">
                <button className=" border-b-2 
                    transform transition duration-300 delay-100 ease-in-out 
                    hover:text-blue-600 border-b-blue-600"> 
                        <span className="flex flex-row justify-start items-center">
                            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                            <img 
                            src="https://github.com/damarkrisnandi.png"
                            alt="Author"
                            width={72}
                            height={72}
                            />
                            FPL Points VS Value
                        </span>
                     </button>
            </div>
            
        </Fragment>
    );
}
 
export default Header;