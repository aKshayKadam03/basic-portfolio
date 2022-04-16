import React from 'react'
import Element from 'react-scroll/modules/components/Element'
import SectionHead from '../../components/section-head'
import ConfigSelector from '../../utilities/configSelector'

function Skills() {
  const { tech, soft } = ConfigSelector.getSkills()

  return (
    <Element name="skills">
      <div className='container mx-auto my-24'>
        <SectionHead
          direction="reverse"
        >
          Skillset
          </SectionHead>

        <div>
          <div className='flex mt-2 gap-4 items-center'>
            <h2 className='border-2 py-6 px-2 rounded  text-center text-slate-100 text-4xl capitalize w-2/12 min-w-fit'>
              Technical
            </h2>
            <div className='flex w-10/12 gap-2 flex-wrap'>
              {tech.map(skill => (
                <div
                  key={skill.id}
                  className="border-2 grid place-items-center p-2 bg-white whitespace-nowrap flex-1 rounded"
                >
                  {skill.title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='flex mt-6 gap-4 items-center flex-row-reverse'>
            <h2 className='border-2 py-4 rounded  text-center text-slate-100 text-4xl capitalize w-2/12 min-w-fit'>
              Soft
            </h2>
            <div className='flex w-10/12 gap-2 flex-wrap'>
              {soft.map(skill => (
                <div
                  key={skill.id}
                  className="border-2 p-2 grid place-items-center bg-white flex-1 whitespace-nowrap rounded"
                >
                  {skill.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skills