import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import './index.css'

function Body() {
  return (
    <div className='body-container'>
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar/>
        </div>
        <div className='col-md-9'>
           <Content/>
        </div>
      </div>
    </div>
  )
}

export default Body