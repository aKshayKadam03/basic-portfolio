import React from 'react'
import { animateScroll, Link } from 'react-scroll/modules'
import ConfigSelector from '../../utilities/configSelector'

function Header() {
  const { firstName, resume } = ConfigSelector.getProfile()
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
      <h2
        className='font-semibold tracking-wider text-lg cursor-pointer'
        onClick={() => animateScroll.scrollToTop()}
      >
        {firstName}.
      </h2>
      <ul className='flex justify-evenly items-center gap-6'>
        <Link
          // activeClass="border-b-4 border-blue-800"
          className='mx-2 my-2 bg-white rounded'
          to="skills"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <li className='cursor-pointer'>
            Skills
          </li>
        </Link>
        <Link
          // activeClass="border-b-4 border-blue-800"
          className='mx-2 my-2 bg-white rounded'
          to="projects"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <li className='cursor-pointer'>Projects</li>
        </Link>
        <Link
          // activeClass="border-b-4 border-blue-800"
          className='mx-2 my-2 bg-white rounded'
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className='cursor-pointer'>
            Contact
          </li>
        </Link>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className='cursor-pointer bg-blue-800 text-white p-2 rounded font-medium hover:bg-yellow-300 hover:text-black'>
          Resume
        </a>
      </ul>
    </nav>
  )
}

export default Header