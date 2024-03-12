import FoodCard from "./FoodCard"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodData from "./FoodData";
import { useSelector } from "react-redux";
import Cart from '../cart/Cart'
import { ToastContainer } from 'react-toastify';



function FoodItems() {
    const category = useSelector((state) => state.category.category)
    const toastHandler = (msg) => toast.success(msg);
    const search = useSelector((state) => state.search.search)

    return (
        <>
            <ToastContainer />
            <div className="flex flex-wrap  text-sm md:text-md md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-2 select-none">
            {FoodData.filter((food) => {
                    if (category === 'All') {
                        return food.name.toLowerCase().includes(search.toLowerCase())

                    } else {
                       return (category === food.category && food.name.toLowerCase().includes(search.toLowerCase()))

                    }
                }).map((item) => {
                    return <FoodCard id={item.id} imgUrl={item.imgUrl} name={item.name} currency={item.currency} price={item.price} netQuantity={item.netQuantity} ratings={item.ratings} desc={item.description} qty={0} type={item.type} toastHandler={toastHandler} />
                })
                }
                <Cart />
            </div>
        </>
    )
}
export default FoodItems