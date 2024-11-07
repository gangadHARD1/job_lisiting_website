import React from 'react'
import logo from '../assets/Images/logo.png'
import { NavLink } from 'react-router-dom';




{/* why we using libnk is because the 'a' tag refreshes the whole page'*/}

const classTeller=({isActive}) =>{ return isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2":"text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" }

const Navbar = () =>{
    return (<nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="Bera Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                  >Bera Jobs</span
                >
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  {/*"text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"*/}
                  {/* earlier this was Link before nav ...*/}
                  <NavLink
                    to="/"
                    className={classTeller}
                    >Home</NavLink>
                  <NavLink
                    to="/jobs"
                    className={classTeller}
                    >Jobs</NavLink>
                  <NavLink
                    to="/add-job"
                    className={classTeller}
                    >Add Job</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>);
}

export default Navbar;
