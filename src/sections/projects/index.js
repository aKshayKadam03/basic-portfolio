import React from 'react'
import Element from 'react-scroll/modules/components/Element'

import Card from '../../components/card'
import SectionHead from '../../components/section-head'

import ConfigSelector from '../../utilities/configSelector'

function Project() {
  const { description, details } = ConfigSelector.getProjects()

  return (
    <Element name="projects">
      <div className='container mx-auto my-24'>
          <SectionHead>
            Projects
          </SectionHead>
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