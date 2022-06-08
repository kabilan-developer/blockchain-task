import React from 'react'
import './Profile.css'
import imgfeel from '../../assets/imgfeel.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Profile() {
  return (
    <div className='profile-container'>
        <img src={imgfeel} alt='img-feel'/>
        <div className='profile-right-box'>
            <div className='profile-img-top'>
                <img src={img1} alt='test' height={56} width={66}/>
                <div style={{width:'2px',backgroundColor:'#979797',margin:'0 25px'}}></div>
                <img src={img2} alt='test' height={56} width={66}/>
                <div style={{width:'2px',backgroundColor:'#979797',margin:'0 25px'}}></div>
                <img src={img3} alt='test' height={56} width={66}/>
            </div>
            <div className='profile-img-bottom'>
                <span>Volume Price</span> <h5>342.02 ETH</h5>
            </div>
        </div>
    </div>
  )
}

export default Profile