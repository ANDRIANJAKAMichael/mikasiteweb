import { Carousel } from 'flowbite-react'
import React from 'react'
import book from '../assets/img/developer.png'
import sary1 from '../assets/img/hello.png'
import reading from '../assets/img/man-reading-book.png'

function Home() {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
          <div className="my-28 md:my-14 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={reading} alt="Reading" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insight
                <span className=" text-brandPrimary leading-snug"> from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias numquam voluptate</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-14 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={book} alt="Reading" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Page voalohany
                <span className=" text-brandPrimary leading-snug"> from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias numquam voluptate</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-14 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={sary1} alt="Reading" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                milay ilahy
                <span className=" text-brandPrimary leading-snug"> from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias numquam voluptate</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Home


