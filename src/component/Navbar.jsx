"use client";
import React, { useState } from 'react'
import '../componentStyle/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='pe-3 mt-1'>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <img className='img-fluid left-logo' src="/assets/img/logo.png" alt="" />
        </div>
        <div>
         <ul className={`m-0 gap-5  nav-menu d-lg-flex ${isOpen ? 'show-menu' : ''}`}>
           <div className='text-end py-3 mt-3  d-lg-none d-block'>
                 <Link onClick={() => setIsOpen(!isOpen)} href="#" ><i className="fa-solid fa-xmark text-white fs-18"></i></Link>
           </div>
            <li className='list-style py-2'>
              <Link className='text-white text-decoration-none text-uppercase' href="#">home</Link>
            </li>
            <li className='list-style py-2'>
              <Link className='text-white text-decoration-none text-uppercase' href="#">About</Link>
            </li>
            <li className='list-style py-2'>
              <Link className='text-white text-decoration-none text-uppercase' href="#">Blog</Link>
            </li>
            <li className='list-style py-2'>
              <Link className='text-white text-decoration-none text-uppercase' href="#">portfolio</Link>
            </li>
            <li className='list-style py-2'>
              <Link className='text-white text-decoration-none text-uppercase' href="#">contact </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link   onClick={() => setIsOpen(!isOpen)} className='d-lg-none d-block ' href="#"><i className="fa-solid fa-bars text-white fs-18"></i></Link>
          <Link className='d-lg-block d-none' href="#"><i className="fa-solid fa-bars text-white fs-18"></i></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar