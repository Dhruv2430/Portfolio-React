import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className='bg-[#1A0B2E] p-5'>
      <div className='max-w-7xl mx-auto flex justify-center md:justify-center'>

        <ul className='hidden md:flex gap-14 text-white text-base'>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/Dhruv"} >
            <li>About</li>
          </NavLink>
          <li>Project</li>
          <li>Contact</li>

        </ul>

        <div className='md:hidden absolute right-5 text-white'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className='md:hidden mt-4 flex flex-col gap-4 text-white text-base bg-[#1A0B2E] p-4 rounded-lg shadow-md items-center text-center'>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/Dhruv"} >
            <li>About</li>
          </NavLink>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
