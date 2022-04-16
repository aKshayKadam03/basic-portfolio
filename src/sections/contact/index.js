import React from 'react'
import Element from 'react-scroll/modules/components/Element'
import SectionHead from '../../components/section-head'
import ConfigSelector from '../../utilities/configSelector'

function Contact() {
  const { details, description } = ConfigSelector.getContact()

  return (
    <Element name="contact">
      <div className='container mx-auto mb-12'>
        <SectionHead
        >
          Contact
        </SectionHead>
        <div className='text-6xl text-white'>
          {description}
        </div>
        <ul className='text-white mx-auto w-fit grid place-content-center'>
            <li className='text-xl mb-4 w-fit p-2 rounded hover:bg-yellow-300 hover:text-black'>
            <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:${details.email}`}
              >
                <i className="fas fa-envelope"/>
                <span className='ml-4'>
                  {details.email}
                </span>
              </a>
            </li>
            <li className='text-xl mb-4 w-fit p-2 rounded hover:bg-yellow-300 hover:text-black'>
              <a target="_blank" rel="noreferrer" href={`tel:+91${details.phone}`}>
                <i className="fas fa-phone-alt" />
                <span className='ml-4'>
                  +91{details.phone}
                </span>
              </a>
            </li>
            <li className='text-xl mb-4 w-fit p-2 rounded hover:bg-yellow-300 hover:text-black'>
            <a
                target="_blank"
                rel="noreferrer"
                href={details.github}
              >
                <i className="fab fa-github"/>
                <span className='ml-4'>
                  {details.github}
                </span>
              </a>
            </li>
            <li className='text-xl mb-4 w-fit p-2 rounded hover:bg-yellow-300 hover:text-black'>
            <a
                target="_blank"
                rel="noreferrer"
                href={details.linkedin}
              >
                <i className="fab fa-linkedin"></i>
                <span className='ml-4'>
                  {details.linkedin}
                </span>
              </a>
            </li>
            <li className='text-xl mb-4 w-fit p-2 rounded hover:bg-yellow-300 hover:text-black'>
            <a
                target="_blank"
                rel="noreferrer"
                href={details.medium}
              >
                <i className="fab fa-medium-m"></i>
                <span className='ml-4'>
                  {details.medium}
                </span>
              </a>
            </li>
        </ul>

      </div>
    </Element>

  )
}

export default Contact