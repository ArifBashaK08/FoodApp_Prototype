import React, { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Menu from './Menu';
import './navbar.css';

function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuOption = [
    {name: 'Home'},
    {name: 'Categories'},
    {name: 'Contact'},
    {name: 'Rate Us'},
    {name: 'About'}
  ]
  
  const category = [
    {name: 'All'},
    {name: 'Biryani'},
    {name: 'Burger'},
    {name: 'Pizza'},
    {name: 'Rolls'},
    {name: 'Cakes'},
    {name: 'Ice-Creams'},
    {name: 'North-Indian'},
    {name: 'South-Indian'},
    {name: 'Chinese'}
  ]
  return (
    <>
      <section className="flex justify-center">
        <nav className="w-full py-4 flex items-center justify-between md:mx-8 lg:mx-10 mx-4 gap-4 md:gap-4 lg:gap-0">
        <div className="flex justify-center xl:hidden">
            {
              toggleMenu ? <RxCross2 size={25} className="hover:fill-orange-600" onClick={() => setToggleMenu(false)} /> : <MdRestaurantMenu size={25} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <>
                <div className="transition ease-in-out duration-300 block relative">
                  <div className={`${toggleMenu ? 'flex' : 'xl:hidden'} flex-col justify-evenly items-center absolute z-10 left-1/2 top-full w-80 rounded-md p-4 origin-center`} style={{ background: '#a8a8a866' }}>
                    <Menu options={category} toggleMenu={toggleMenu} />
                    <hr />
                    <div className="flex  w-full justify-between items-center py-2 px-3 lg:hidden">
                      <p><a href="#" className="hover:underline hover:underline-offset-1 font-medium">Sign In</a></p>
                      <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white">sign Up</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex sm:flex-none">
            <h3 className="font-black text-md md:text-xl  hover:cursor-pointer hover:text-orange-600">{props.title}</h3>
          </div>
          <div className="hidden xl:flex">
          <Menu options={menuOption} toggleMenu={toggleMenu} />
          </div>
          <div className="inputs justify-evenly items-center gap-4 flex">
            <input type="text" placeholder="Search here..." className="md:p-2 border-b border-gray-300 focus:outline-none focus:outline-offset-0 focus:border-b focus:border-gray-600 w-full py-1.5 px-3  text-sm md:text-md" />
            <button type="button" className="bg-black hover:bg-orange-600 md:py-2 md:px-6 rounded-md font-medium text-white py-0.5 px-3  text-sm md:text-md flex items-center">Search</button>
          </div>
          <div className="hidden justify-evenly items-center gap-4 md:flex">
            <p><a href="#" className="hover:underline hover:underline-offset-1 font-medium hover:text-orange-600 focus:text-orange-600">Sign In</a></p>
            <button type="button" className="bg-black hover:bg-orange-600 py-2 px-6 rounded-md font-medium text-white text-sm md:text-md">sign Up</button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
