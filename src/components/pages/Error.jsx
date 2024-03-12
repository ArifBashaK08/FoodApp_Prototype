import NotFound404 from '../../assets/NotFound404.png'
function Error() {
  
  return (
    <>
      <div className="min-h-[85vh] w-full flex items-center justify-center select-none">
        <img src={NotFound404} alt="404 - Not Found" />
      </div>
    </>
  )
}
export default Error