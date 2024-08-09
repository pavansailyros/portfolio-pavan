// import React from 'react'
// import Magicbutton from './ui/Magicbutton'
// import { FaLocationArrow } from 'react-icons/fa'
// import { socialMedia } from '@/data'

// const Footer = () => {
//   return (
//     <footer className=' w-full mb-[100px] pb-20' id='contact'>
//         <div className=' w-full absolute left-0 -bottom-72 min-h-96 '>
//             <img 
//             src='/footer-grid.svg'
//             alt='grid'
//             className=' w-full h-full opacity-100'/>
//         </div>

//         <div className=' flex flex-col items-center'>
//           <h1 className=' heading lg:max-w-[45vw]
//           '>
//             Ready to take <span className=' text-purple'>
//                your </span>digital presence
//             to next level ?
//           </h1>
//           <p className=' text-white-200 md:mt-10 my-5
//            text-center mt-2'>
//             Reach out to me today and let&apos;s discuss
//             how i can help you achieve your goals.
//           </p>
//           <a href='mailto:pavansai@lyrostech.com'>
//             <Magicbutton 
//             title="Let's get in touch "
//             icon={<FaLocationArrow />}
//             postion='right'/>
//           </a>
//         </div>

//         <div className=' flex  flex-row justify-between sm:justify-center  items-center  sm:flex-col'>
//           <p className=' md:text-base text-sm md:font-normal font-light'>
//             Copyright © 2024 Pavan Sai
//           </p>
//           <div className=' flex items-center justify-center md:gap-3 gap-6'>
//             {socialMedia.map((profile) =>(
//               <div key={profile.id} className=' w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 border-black-300'>
//                 <img 
//                 src={profile.img}
//                 alt={profile.id}
//                 width={20}
//                 height={20}/>

//               </div>
//             ))}
//           </div>
//         </div>



//     </footer>
//   )
// }

// export default Footer




import React from 'react'
import Magicbutton from './ui/Magicbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-20' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-100'
        />
      </div>

      <div className='flex flex-col items-center px-4'>
        <h1 className='heading lg:max-w-[45vw] text-center'>
          Ready to take <span className='text-purple'>your</span> digital presence
          to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center mt-2'>
          Reach out to me today and let&apos;s discuss
          how I can help you achieve your goals.
        </p>
        <a href='mailto:pavansai@lyrostech.com'>
          <Magicbutton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            postion='right'
          />
        </a>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center sm:justify-center sm:flex-col mt-10 md:mt-20'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Pavan Sai
        </p>
        <div className='flex items-center justify-center md:gap-3 gap-6 mt-4 md:mt-0'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 border-black-300'>
              <img
                src={profile.img}
                alt={profile.id}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
