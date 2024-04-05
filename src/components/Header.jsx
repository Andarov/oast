import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-5'>
      <div className="w-full max-w-base mx-auto px-5 flex justify-between items-center">
        {/* logo */}
        <Link>
          <img src={logo} alt="Logo" />
        </Link>

        <div className='flex items-center gap-8'>
          <nav>
            <ul className='flex items-center gap-8'>
              <li>
                <NavLink to='/' className='text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300'>Auction</NavLink>
              </li>
              <li>
                <NavLink to='/presale' className='text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300'>Join the presale</NavLink>
              </li>
              <li>
                <NavLink to='/faq' className='text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300'>FAQ</NavLink>
              </li>
            </ul>
          </nav>

          <button className='px-5 py-3.5 bg-oast-primary-medium rounded-xl shadow-btn text-oast-light font-bold border border-[#282b33]'>Connect your wallet</button>
        </div>
      </div>
    </header>
  )
}

export default Header