import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['Home', 'About Me', 'Project', 'Contact']

  return (
    <nav className='bg-[#1A0B2E] p-5'>
      <div className='max-w-7xl mx-auto flex justify-center md:justify-center'>
        
        <ul className='hidden md:flex gap-14 text-white text-base'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='hover:text-purple-400 cursor-pointer transition duration-300'
            >
              {item}
            </li>
          ))}
        </ul>

        <div className='md:hidden absolute right-5 text-white'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className='md:hidden mt-4 flex flex-col gap-4 text-white text-base bg-[#1A0B2E] p-4 rounded-lg shadow-md items-center text-center'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='hover:text-purple-400 cursor-pointer transition duration-300'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
