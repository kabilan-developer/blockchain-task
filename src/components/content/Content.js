import React from 'react'
import './Content.css'
import bodynav from '../../assets/bodynav.png'
import category from '../../assets/category.png'
import Cards from './Cards'

function Content() {
  return (
    <div className='content-container'>
        <div className='row'>
            <img src={bodynav} alt='body-nav' className='body-nav'/>
        </div>
        <br/>
        <div className='d-flex justify-content-between'>
          <span>Show results of 3445</span>
          <img src={category} alt='category' className='category'/>
        </div>
        <br/>
        <Cards/>
    </div>
  )
}

export default Content