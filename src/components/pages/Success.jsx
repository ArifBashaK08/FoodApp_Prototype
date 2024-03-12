import { PacmanLoader } from "react-spinners"
import { useState, useEffect } from "react"

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
            <h1 className="text-4xl font-black ">Order Successfull..!</h1>
        }
</div>
</>
  )
}
export default Success