import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../../redux/slices/CartSlice";

function CartItem({ id, imgUrl, name, price, qty, toastHandler }) {

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full my-2 flex gap-1 md:gap-2 items-center text-sm md:text-md shadow-md">
        <div className="w-[7rem] h-[5rem] rounded-lg">
          <img src={imgUrl} alt="Cart Item" className="rounded-lg w-full object-cover h-full" />
        </div>
        <div className="flex-1 md:p-2">
          <div className="flex justify-between">
            <strong className="cursor-pointer">{name}</strong>
            <ImBin className="me-3 cursor-pointer hover:text-red-600" onClick={() => {
              dispatch(removeFromCart({ id, imgUrl, name, price, qty }));
              toastHandler('Item has removed from cart')
            }
            } />
          </div>
          <hr className="my-1 md:my-2" />
          <div className="flex justify-between text-xs">
            <p>INR <strong className="">{price}</strong>/-</p>
            <p>QTY : <strong className="me-4">{qty}</strong></p>
          </div>
        </div>

        <div className="grid md:flex items-center rounded-lg justify-center">
          <span className="px-2 py-1 md:px-3 md:py-2 bg-black hover:bg-green-600 text-white rounded-t-lg md:rounded-l-lg md:rounded-e-none cursor-pointer" onClick={() => {
            dispatch(incrementQty({ id }))
          }}><IoMdAdd /></span>

          <span className="md:w-[2rem] md:py-1 flex justify-center border-x md:border-y md:border-x-0">{qty}</span>

          <span className="px-2 py-1 md:px-3 md:py-2 bg-black hover:bg-red-600 text-white rounded-b-lg md:rounded-e-lg md:rounded-s-none cursor-pointer" onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id, imgUrl, name, price, qty }))}><IoMdRemove /></span>
        </div>
      </div>
      <hr />
    </>
  )
}
export default CartItem