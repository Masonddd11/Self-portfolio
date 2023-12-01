import React from 'react'
import ProjectItems from './ProjectItems'

function Project() {
  return (
    <div className='min-h-screen min-w-full sm:px-[100px] sm:py-[100px] px-[20px] pt-[100px] '>
      <div className="lg:grid grid-cols-3 grid grid-cols-1">
        <ProjectItems />
      </div>
    </div>
      
  )
}

export default Project