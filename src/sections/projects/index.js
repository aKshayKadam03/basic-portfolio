import React from 'react'
import Element from 'react-scroll/modules/components/Element'

import Card from '../../components/card'

import ConfigSelector from '../../utilities/configSelector'

function Project() {
  const { description, details } = ConfigSelector.getProjects()

  return (
    <Element name="projects">
      <div className='container mx-auto my-24'>
          <h2 className='mb-10 font-semibold text-gray-800 text-lg px-2 uppercase bg-gray-300 rounded w-fit'>
            Projects
          </h2>
         <div className='text-6xl text-white'>
          {description}
        </div>
        <div className='mt-4 flex gap-8 flex-wrap'>
             {details.map((item, index) => (
               <Card
                key={index}
                id={index + 1}
                {...item}
               />
             ))}
        </div>
      </div>
    </Element>

  )
}

export default Project