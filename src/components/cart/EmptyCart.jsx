import EmptyCartImg from '../../assets/EmptyCartImg.png'

function EmptyCart() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className='w-1/2'>
                <img src={EmptyCartImg} alt="Empty Cart" />
                <h1 className="font-black text-xl text-gray-500 text-center">Cart is empty</h1>
            </div>
        </div>
    )
}
export default EmptyCart