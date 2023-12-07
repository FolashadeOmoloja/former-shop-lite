import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
       <MaxWidthWrapper className='relative'>
         <div  className='flex  absolute top-0 left-0 right-0'>
         <div  className='basis-1/2 bg-white '></div>
         <div className='basia-1/2 bg-[#]'></div>
         </div>
         < >
             <Navbar/>
        </>
       </MaxWidthWrapper>
  )
}

export default Header