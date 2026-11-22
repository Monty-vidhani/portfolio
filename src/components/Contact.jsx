import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div id='contact' className="w-full flex border-b-2 items-center justify-center bg-black">
      <div className="cntnr flex flex-col h-full pt-20 relative text-white w-full">
        
        {/* Heading */}
        <div className="heading flex flex-col justify-evenly items-center w-full">
          <h1 className='text-5xl underline decoration-yellow-500'>Contact</h1>
          <p className='mt-3 text-2xl font-[Helvetica_Now_Display]'>
            Drop message to reach out to me
          </p>
        </div>
        
        {/* Content */}
        <div className='h-[35rem] flex flex-col lg:flex-row p-4  justify-center lg:justify-evenly items-center w-full overflow-hidden'>
          
          {/* Contact div - always visible */}
          <div className='h-full w-full lg:w-4/10 lg:h-full  contact flex justify-center items-center'>
            <Form />
          </div>
          
          {/* Picture div - only visible on desktop */}
          <div className='hidden lg:block h-full w-4/10 bg-yellow-300 picture'></div>
        </div>

      </div>
    </div>
  )
}

export default Contact
