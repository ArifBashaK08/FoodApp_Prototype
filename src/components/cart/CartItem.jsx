import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ImBin } from "react-icons/im";


function CartItem() {
const [count, setCount] = useState(1)

  return (
    <>
        <div className="w-full my-2 flex gap-1 md:gap-2 items-center text-sm md:text-md shadow-md">
            <div className="w-[7rem] rounded-lg">
            <img src="https://media.istockphoto.com/id/1345624358/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20&c=-agpiZBzd6Upz99_wdcXrJRlG1EpNY6e4_Ff16HiyPc=" alt="Cart Item" className="rounded-lg"/>
            </div>
            <div className="flex-1 md:p-2">
            <div className="flex justify-between">
            <strong className="cursor-pointer">Shahi Chicken Biryani</strong>
            <ImBin className="me-3 cursor-pointer hover:text-red-600"/>
              </div>
            <hr className="my-1 md:my-2" />
            <div className="flex justify-between text-xs">
            <p>INR <strong className="">250</strong>/-</p>
            <p>QNT : <strong className="me-4">{count}</strong></p>
            </div>
            </div>
             
            <div className="grid md:flex items-center rounded-lg justify-center">
              <span className="px-2 py-1 md:px-3 md:py-2 bg-green-500 text-white rounded-t-lg md:rounded-l-lg md:rounded-e-none cursor-pointer" onClick={() => setCount(count+1)}><IoMdAdd /></span>
              
              <span className="md:w-[2rem] md:py-1 flex justify-center border-x md:border-y md:border-x-0">{count}</span>
            
              <span className="px-2 py-1 md:px-3 md:py-2 bg-red-500 text-white rounded-b-lg md:rounded-e-lg md:rounded-s-none cursor-pointer"onClick={() => {count > 1 ? setCount(count-1): count}}><IoMdRemove /></span>
            </div>
        </div>
        <hr />
    </>
  )
}
export default CartItem