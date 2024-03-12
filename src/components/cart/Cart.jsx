import React, {useState} from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import EmptyCart from "./EmptyCart";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";




function Cart() {

const [cartActive, setCartActive] = useState(false)
    
    const notifyRemove = (msg) => toast.success(msg);
    const cartItems = useSelector((state) => state.cart.cart)
    const netQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty*item.price, 0)

    const navigate = useNavigate()

    return (
        <>
            <div className={`fixed right-0 top-0 w-[85%] md:w-[70%] xl:w-[35%] h-full z-50 bg-white  text-sm md:text-md ${cartActive? 'translate-x-0': 'translate-x-full'} transition-all duration-700 ease-in-out`}>
                <div className="h-full w-full">
                    <div className="flex justify-between items-center bg-orange-600 p-6 text-white">
                        <h2 className="text-md text-sm md:text-lg lg:text-xl"><strong>My Cart</strong></h2>
                        <IoClose size={25} className="hover:fill-black cursor-pointer" onClick={() => setCartActive(false)}/>
                    </div>

                    {cartItems.length === 0 ? <EmptyCart /> :
                     <>
                     <div className="mx-6 mt-4 relative overflow-scroll">
                        <div className="overflow-scroll">
                            {
                                cartItems.map((item) => <CartItem key={item.id} id={item.id} imgUrl={item.imgUrl} name={item.name} price={item.price} qty={item.qty} toastHandler={notifyRemove} />)
                            }
                        </div>
                    </div>
                    <div className="mt-6 px-6 py-3 absolute bottom-0 right-0 left-0 bg-white">
                        <div className="font-medium">
                            <p>Items <span>:</span> <strong>{netQty}</strong></p>
                            <hr className="my-2" />
                            <p>Total Amount <span>:</span> <strong>{totalPrice}</strong></p>
                        </div>
                        <hr className="my-3" />
                        <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white w-full" onClick={() => navigate('/success')}>Check-Out</button>
                    </div>
                    </>
                    }
                </div>
            </div>
            <button className={`${netQty > 0 && 'animate-bounce'} p-3 border-none rounded-full bg-white text-center fixed z-10 bottom-[5%] right-[5%] shadow-lg`}>
            <MdShoppingCart size={30} className="hover:fill-orange-600" onClick={() => setCartActive(true)}/>
            </button>
        </>
    )
}
export default Cart