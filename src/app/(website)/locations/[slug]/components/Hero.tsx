import React from 'react'
import { LocationPageData } from '../pageData'
import Image from 'next/image'
const Hero = ({images}:any) => {
    console.log(images)
  return (
    <div className='relative w-full lg:aspect-16/7.5 aspect-4/3.75 overflow-hidden'>
      {/* <p>{images}</p> */}
      {images.map((img,i) => ( 
              <Image
                src={img}
                alt={" "}
                fill
                className="object-cover max-lg:object-left"
                sizes="100vw"
              />
      ))} 
      
    </div>

  )
}

export default Hero
