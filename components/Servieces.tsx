import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Servieces = () => {
  return (
    <div className=' py-20' id='projects'>
        <h1 className=' heading py-5 '>
            My { ' '}
     
        <span className=' text-purple'>
            Servieces</span>
        </h1>

        <div className=' flex flex-col items-center
         justify-center max-lg:mt-10 '>
            <div className=' h-[50vh] md:h-[30rem]
             rounded-md flex flex-col antialiased
              items-center relative overflow-hidden'>
            <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'/>

            </div>
           
        </div>
    </div>
  )
}

export default Servieces