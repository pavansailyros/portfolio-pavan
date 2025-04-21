// import { projects } from '@/data'
// import React from 'react'
// import { PinContainer } from './ui/3d-pin'
// import { FaLocationArrow } from 'react-icons/fa'
// import  Boardbutton  from './ui/Boardbutton';
// import Magicbutton from './ui/Magicbutton'

// const RecentroProjects = () => {
//   return (
//     <div className=' py-20' id='projects'>
//         <h1 className=' heading '>
//         A small selection of {' '}
//         <span className=' text-purple'>recent projects</span>
//         </h1>

//         <div className=' flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 
//         mt-10'>
//           {projects.map(({id, title, des, img,
//            iconLists, link, liveLink }
//           ) => (
//             <div key={id} className=' sm:h-[41rem] h-[32rem]
//              lg:min-h-[32.5rem]  flex items-center justify-center 
//             sm:w-[570px] w-[80vw] '>
//            <PinContainer title={link} href={link}>
//             <div className=' relative flex items-center
//              sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
//               <div className=' relative w-full
//               h-full overflow-hidden lg:rounded-3xl
//               bg-[#13163d]'>
//                 <img src='/bg.png' alt='bg-pin'/>
//               </div>
//               <img  src={img}
//               alt={title}
//               className='z-10 absolute  w-[22rem] h-56 pl-6 items-center '/>


//             </div>
//             <h1 className=' font-bold lg:text-2xl
//              md:text-xl text-base line-clamp-1'>
//             {title}
//             </h1>
//             <p className=' lg:text-xl lg:font-normal
//             font-light text-sm line-clamp-2'>
//             {des}
//             </p>

//             <div className='  mt-7 mb-3'>
              
//               <div className=' flex items-center'>
                
//               {iconLists.map((icon, index) => (
//                 <div key={icon} 
//                 className=' border border-white/[0.2]
//                  rounded-full bg-black lg:w-10 w-8 h-8
//                   flex justify-between items-center' 
//                   style={{ transform: ` translateX(-${5 * index * 2}px)`}}>
//                   <img  src={icon} alt={icon}
//                   className=' p-2' />
                  
//                 </div>
                
//               )
//             )
//               }
              
//               </div>

//               <div className=' flex items-center justify-between py-4'>
//               <a href={link}>
//                <Boardbutton
//                title = 'Github Link'
//                icon={<FaLocationArrow/> }
//                postion='right'/>
//             </a>


//             <a href={liveLink}>
//                <Boardbutton
//                title = 'Live Link'
//                icon={<FaLocationArrow/> }
//                postion='right'/>
//             </a>

           


//               </div>


//             </div>
        
//            </PinContainer>

//             </div>
//           ))}
//         </div>


//     </div>
//   )
// }

// export default RecentroProjects







import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Boardbutton from './ui/Boardbutton'

const RecentroProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading text-center'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link, liveLink }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
          >
            <PinContainer title={link} href={link}>
              <div
                className='relative flex items-center sm:w-96 w-[80vw] overflow-hidden 
                sm:h-[40vh] h-[30vh] mb-10 rounded-xl shadow-md bg-[#13163d] 
                hover:scale-[1.02] transition-all duration-300 ease-in-out'
              >
                <img
                  src={img}
                  alt={title}
                  className='w-full h-full object-cover'
                />
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black 
                      lg:w-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${index * 10}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex items-center justify-between py-4'>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <Boardbutton
                      title='Github Link'
                      icon={<FaLocationArrow />}
                      postion='right'
                    />
                  </a>
                  <a href={liveLink} target='_blank' rel='noopener noreferrer'>
                    <Boardbutton
                      title='Live Link'
                      icon={<FaLocationArrow />}
                      postion='right'
                    />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentroProjects
