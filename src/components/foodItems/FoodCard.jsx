import { IoHeartSharp } from "react-icons/io5";;
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/CartSlice";
import { BiFoodTag } from "react-icons/bi";



function FoodCard({ id, imgUrl, name, currency, price, ratings, desc, qty, toastHandler, type }) {

  const dispatch = useDispatch();

  const cartItemHandler = () => {
    dispatch(addToCart({ id, imgUrl, name, price, qty }))
    toastHandler('Item added to cart')
  }
  return (
    <>
      <div className="border border-gray-300 rounded-xl w-full">
        <div className="overflow-hidden cursor-grab rounded-t-xl">
          <img src={imgUrl} alt={name} className="w-full h-[25rem] object-cover rounded-t-xl hover:scale-110 transition-all duration-500 ease-in-out" />
        </div>
        <div className="grid p-2 gap-1 mx-2">
          <div className="flex justify-between items-center">
            <strong className="hover:text-orange-600 cursor-pointer">{name}</strong>
            <div className="flex gap-2">
            <BiFoodTag className={`${type === 'non-veg'? 'fill-red-600' : 'fill-green-600'} cursor-pointer`} size={20} />
            <IoHeartSharp className='hover:fill-red-600 cursor-pointer' size={20} />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>{currency} <strong className="">{price}</strong>/-</p>
            <div className="flex items-center gap-2">
              <FaStar fill={'rgb(234 179 8)'} />
              <strong className="text-emerald-500">{ratings}</strong>
            </div>
          </div>
          <hr />
          <p className="w-full xl:min-h-16">{desc.length > 70 ? desc.slice(0, 100) + '...' : desc}</p>
          <div className="flex justify-evenly items-center">

            <button type="button" className="bg-black hover:bg-orange-600 flex justify-center gap-4 items-center w-full py-2 px-6 rounded-md font-medium text-white" onClick={cartItemHandler}>Add to cart<MdOutlineAddShoppingCart size={20} />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}
export default FoodCard