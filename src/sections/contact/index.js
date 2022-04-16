import React from 'react'
import Element from 'react-scroll/modules/components/Element'
import SectionHead from '../../components/section-head'

function Contact() {
  return (
    <Element name="contact">
      <div className='container mx-auto'>
        <SectionHead
          direction="reverse"
        >
          Get in touch
        </SectionHead>
      </div>
    </Element>

  )
}

export default Contact