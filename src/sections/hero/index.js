import React from 'react'
import ConfigSelector from '../../utilities/configSelector'

function Hero() {
  const { picture, about, headLine, firstName, lastName } = ConfigSelector.getProfile()

  return (
    <section className='container mt-2 mx-auto h-[80vh] grid place-items-center'>
        <div className='flex gap-10 h-max items-center'>
            <div className=''>
                <img
                 className='w-full rounded'
                 src={picture} 
                 alt="profile-picture"
                />
            </div>
            <div>
                <h1 className='text-gray-50 font-bold sm:text-2xl lg:text-6xl antialiased'>
                    {headLine}
                </h1>
                <h3 className='text-3xl text-gray-300 mt-8 mb-2'>
                    {`${firstName} ${lastName}`}
                </h3>
                <p className='text-l text-gray-300'>
                    {about}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero