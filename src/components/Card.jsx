import Button from "./Button";
const Card = (props) => {
    return ( 
        <div className="p-3 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
        hover:scale-110 transition ease-in-out
        ">
            <img class="h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg scale-50" src={props.img} alt=""></img>
            <div>
                <h5 className="text-left mb-2 text-2xl font-bold text-gray-900 dark:text-white ">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{props.desc || 'None'}</p>
                <Button label="Read More"/>
            </div>
            
        </div>
     );
}
 
export default Card;