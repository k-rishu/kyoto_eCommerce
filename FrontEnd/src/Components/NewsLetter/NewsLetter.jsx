import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subsciibe to our newsLetter and Stay Updated</p>
        <div>
            <input type="email" placeholder='your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}


export default NewsLetter