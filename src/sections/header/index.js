import React from 'react'
import ConfigSelector from '../../utilities/configSelector'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
    const { firstName } = ConfigSelector.getProfile()
  return (
    <nav className='
                sticky
                top-0
                bg-white 
                container 
                mx-auto 
                flex 
                justify-between
                h-14
                items-center
                rounded
                px-5
                '
    >
        <h2 className='font-semibold tracking-wider text-lg'>
            {firstName}.
        </h2>
        <ul className='flex justify-evenly items-center gap-4'>
            <li className='cursor-pointer'>Skills</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer bg-blue-800 text-white p-2 rounded font-medium hover:bg-yellow-300 hover:text-black'>Resume</li>
        </ul>
    </nav>
  )
}

export default Header