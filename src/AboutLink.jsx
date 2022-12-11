import React from 'react'
import {FcAbout} from 'react-icons/fc'
import {Link} from 'react-router-dom'

function AboutLink() {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FcAbout size={40}></FcAbout>
        </Link>
    </div>
  )
}

export default AboutLink