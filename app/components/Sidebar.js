import React from 'react'

function Sidebar() {
  return (
    <div className='h-screen w-[200px] pl-[2px] pt-4 bg-[#202D48]'>
       <h2 className='text-white font-semibold leading-[50px]  text-[37px]'>Task <br />Tracker</h2>

       <div className='w-[95%] mt-3 h-[40px] flex items-center justify-center'>
        <h2 className='text-white flex items-center justify-center rounded-sm bg-[#e7e1e181] cursor-pointer text-[17px]  h-[35px] w-[155px]'>Dashboard</h2>
       </div>
       <div className='w-[95%] mt-3 h-[40px] flex items-center justify-center'>
        <h2 className='text-white flex items-center justify-center rounded-sm bg-[#e7e1e181] cursor-pointer text-[17px]  h-[35px] w-[155px]'>Contact</h2>
       </div>
       <div className='w-[95%] mt-3 h-[40px] flex items-center justify-center'>
        <h2 className='text-white flex items-center justify-center rounded-sm bg-[#e7e1e181] cursor-pointer text-[17px]  h-[35px] w-[155px]'>Login</h2>
       </div>
    </div>
  )
}

export default Sidebar