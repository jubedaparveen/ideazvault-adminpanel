import React from 'react'

const UserCard = ({type}) => {
  return (
    <div className='rounded-lg p-2  odd:bg-[#e0cbb0] even:bg-[#8acee6] border border-amber-800/20 flex-1 min-w-[130px]'>
     <div className='flex flex-col justify-start'>
          <div><span className='text-[.6rem] bg-amber-50 px-2 rounded-full'> 2024/25 </span></div>
          <span className='font-semibold'>{type}</span>
          <span className='font-bold'>200</span>
     </div>
    </div>
  )
}

export default UserCard