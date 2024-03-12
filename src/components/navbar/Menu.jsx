import Categories from '../categoryMenu/Categories'

function Menu(props) {

  return (
    <div className={`justify-center ${props.toggleMenu ? 'sm:flex w-full xl:hidden' : 'xl:flex sm:hidden'} items-center`}>
      <ul className={`gap-4 list-none ${props.toggleMenu ? 'grid grid-cols-2 w-full justify-between' : 'flex flex-wrap'}`}>
        {props.options.map((option, index) => (
          <li key={index} className="px-3 py-2 hover:bg-orange-400 hover:rounded-md focus:bg-orange-400 focus:rounded-md "><a href='#' className="font-medium">{option.name}</a></li>
        ))}
      </ul>
      <div>
      </div>
    </div>
  )
}
export default Menu