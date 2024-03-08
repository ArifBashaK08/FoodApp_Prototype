import React, {useState} from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";



function Cart() {

const [cartActive, setCartActive] = useState(false)
    
    const cartItems = useSelector((state) => state.cart.cart)
    console.log(cartItems)

    return (
        <>
            <div className={`fixed right-0 top-0 w-[90%] md:w-[65%] lg:w-[45%] h-full z-50 bg-white  text-sm md:text-md ${cartActive? 'translate-x-0': 'translate-x-full'} transition-all duration-700 ease-in-out`}>
                <div className="h-full w-full">
                    <div className="flex justify-between items-center bg-orange-600 p-6 text-white">
                        <h2 className="text-md text-sm md:text-lg lg:text-xl"><strong>My Cart</strong></h2>
                        <IoClose size={25} className="hover:fill-black cursor-pointer" onClick={() => setCartActive(false)}/>
                    </div>
                    <div className="mx-6 mt-4 relative overflow-scroll">
                        <div className="overflow-scroll">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                    <div className="mt-6 px-6 py-3 absolute bottom-0 right-0 left-0 bg-white">
                        <div className="font-medium">
                            <p>Items <span>:</span> <strong></strong></p>
                            <hr className="my-2" />
                            <p>Total Amount <span>:</span> <strong></strong></p>
                        </div>
                        <hr className="my-3" />
                        <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white w-full">Check-Out</button>
                    </div>
                </div>
            </div>
            <button className="p-3 border-none rounded-full bg-white text-center fixed z-10 bottom-[5%] right-[5%] shadow-lg">
            <MdShoppingCart size={30} className="hover:fill-orange-600" onClick={() => setCartActive(true)}/>
            </button>
        </>
    )
}
export default Cart