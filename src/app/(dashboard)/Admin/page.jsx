import UserCard from '@/components/UserCard';
import UsersMessages from '@/components/UsersMessages';
import React from 'react'

const Adminpage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4 '>
      <div className='w-full lg:w-2/3 '>
        <div className='flex flex-wrap gap-4'>
          <UserCard type='Total Blogs'/>
          <UserCard type='Tecnical Blogs'/>
          <UserCard type='Tranding Topics'/>
          <UserCard type='Writers Count '/>
        </div>
      </div>
      {/* Right col */}
      <div className='w-full lg:w-1/3 '>
      <div>
        <UsersMessages/>
      </div>
      </div>
    </div>
  )
}

export default Adminpage;