import React from 'react'
import ConfigSelector from '../../utilities/configSelector'

function Footer() {
  const {copyright} = ConfigSelector.getFooter()
  return (
    <div className='container mx-auto bg-inherit text-white text-center py-2'>
        <h6>{copyright}</h6>
    </div>
  )
}

export default Footer