import React from 'react'
import BottomNav from '../components/shared/BottomNav'

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex'>
        {/* {LEFT DIV} */}
        <div className='flex-[3] bg-red-600'></div>

        {/* {RIGHT DIV} */}
        <div className='flex-[2] bg-blue-600'></div>

        {/* {BOTTOM NAV} */}
        <BottomNav/>
    </section>
  )
}

export default Home