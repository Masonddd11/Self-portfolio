import React from 'react'
import ProjectItems from './ProjectItems'

function Project() {
  return (
    <div className='min-h-screen min-w-full p-[40px]'>
      <div className="grid grid-cols-3">
        <ProjectItems />
      </div>
    </div>
      
  )
}

export default Project