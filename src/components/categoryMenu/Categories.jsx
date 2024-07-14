import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdRestaurantMenu } from "react-icons/md";
import FoodData from "../foodItems/foodData";
import { useDispatch, useSelector } from "react-redux";
import { filterMenu } from "@/redux/slices/CategorySlice";

function Categories() {
    const [menuActive, setMenuActive] = useState(false);
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch(); 
    const selectedCategory = useSelector((state) => state.category.category)

    const listCategories = () => {
        const filteredCategories = FoodData.filter(food => food.category !== undefined);
        const uniqueCategory = ['All', ...new Set(filteredCategories.map(food => food.category))];
        setCategory(uniqueCategory);
    }

    useEffect(() => {
        listCategories();
    }, []);

    const close = () => {
        setMenuActive(false)
    }

    return (
        <>
            <MdRestaurantMenu size={25} onClick={() => setMenuActive(true)} className="hover:fill-orange-600" />
            <div className={`fixed left-0 top-0 w-[60%] md:w-[35%] xl:w-[30%] h-full z-50 bg-white  text-sm md:text-md ${!menuActive ? '-translate-x-full' : 'translate-x-0'} transition-all duration-700 ease-in-out`}>
                <div className="flex justify-between items-center bg-orange-600 p-6 text-white">
                    <h2 className="text-md text-sm md:text-lg lg:text-xl"><strong>Search by Category</strong></h2>
                    <RxCross2 size={25} onClick={close} className="hover:fill-orange-600 cursor-pointer" />
                </div>
                <ul className='list-none px-4 mt-4'>
                    {category.map((option, index) => (
                        <>
                            <li key={index} className={`px-3 py-2 hover:bg-orange-300 hover:rounded-md focus:bg-orange-400 focus:rounded-md cursor-pointer ${selectedCategory === option && "bg-orange-400 rounded-md"}`} onClick={() => dispatch(filterMenu(option))}><a href="#" className="font-medium">{option}</a></li>
                            <hr />
                        </>
                    ))}
                </ul>
                <div className="flex justify-evenly items-center gap-4 md:hidden my-4">
                    <p><a href="#" className="hover:underline hover:underline-offset-1 font-medium hover:text-orange-600 focus:text-orange-600">Sign In</a></p>
                    <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white text-sm md:text-md">sign Up</button>
                </div>
            </div>
        </>
    );
}
export default Categories;
