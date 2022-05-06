import React from 'react'
import './footer.css'
import{BsFacebook, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
 
export default function Footer() {
  return (
    <section className='container'>
      <div className='my-2'>
        <div className='text-center mb-1 mb-lg-0'>
          <p className='m-0'>Copyright © 2022 CryptoWorld.com. All rights reserved.</p>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className='mx-2 my-0 footer-icons'><BsFacebook/></a>
          <a href='https://www.twitter.com/' target='_blank' rel='noreferrer' className='mx-2 my-0 footer-icons'><BsTwitter/></a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className='mx-2 my-0 footer-icons'><BsYoutube/></a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='mx-2  my-0 footer-icons'><BsInstagram/></a>
        </div>
      </div>
    </section>
  )
}
