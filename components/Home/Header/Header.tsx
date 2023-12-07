import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
       <MaxWidthWrapper className='flex'>
         <div className='basis-1/2'></div>
         <div className='basia-1/2'></div>
         < >
             <Navbar/>
        </>
       </MaxWidthWrapper>
  )
}

export default Header