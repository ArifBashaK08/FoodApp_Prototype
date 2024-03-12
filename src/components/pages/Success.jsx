import { PacmanLoader } from "react-spinners"
import { useState, useEffect } from "react"
import OrderSuccess from '../../assets/OrderSuccess.png'

function Success() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout (() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
<>
<div className="min-h-[85vh] w-full flex items-center justify-center select-none">
{
          loading ? <PacmanLoader color="rgb(234 88 12)" /> :
          <div className="flex justify-center items-center lg:w-[40%]">
            <img src={OrderSuccess} alt="Order Success" />
          </div>
        }
</div>
</>
  )
}
export default Success