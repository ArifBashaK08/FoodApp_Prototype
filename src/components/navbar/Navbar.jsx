import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from './Menu';
import Categories from "../categoryMenu/Categories";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/slices/SearchSlice";

function Navbar(props) {

  const [toggleMenu, setToggleMenu] = useState(false)
  const dispatch = useDispatch()
  const menuOption = [
    {name: 'Home'},
    {name: 'Categories'},
    {name: 'Contact'},
    {name: 'Rate Us'},
    {name: 'About'}
  ]
  
  return (
    <>
      <section className="flex justify-center select-none">
        <nav className="w-full py-4 flex items-center justify-between md:mx-8 lg:mx-10 mx-4 gap-4 md:gap-4 lg:gap-0">
        <div className="flex justify-center xl:hidden">
          <Categories /> 
          </div>
          <div className="flex sm:flex-none">
            <Link to='/' className="font-black text-md md:text-xl hover:cursor-pointer hover:text-orange-600">{props.title}</Link>
          </div>
          <div className="hidden xl:flex">
          <Menu options={menuOption} toggleMenu={toggleMenu} />
          </div>
          <div className="inputs justify-evenly items-center gap-4 flex">
            <input type="text" placeholder="Search here..." className="md:p-2 border-b border-gray-300 focus:outline-none focus:outline-offset-0 focus:border-b focus:border-gray-600 w-full py-1.5 px-3  text-sm md:text-md" onChange={(e) => dispatch(setSearch(e.target.value))}/>
            <button type="button" className="bg-black hover:bg-orange-600 md:py-2 md:px-6 rounded-md font-medium text-white py-0.5 px-3  text-sm md:text-md flex items-center">Search</button>
          </div>
          <div className="hidden justify-evenly items-center gap-4 md:flex">
            <p><Link to="#" className="hover:underline hover:underline-offset-1 font-medium hover:text-orange-600 focus:text-orange-600">Sign In</Link></p>
            <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white text-sm md:text-md">sign Up</button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
