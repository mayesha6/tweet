import React from 'react'
import ProfileSideBar from '../components/ProfileSideBar'
import UpdateForm from '../components/UpdateForm'

const Profile = () => {
  return (
    <section className='bg-[#FDF0E9] px-[31px] pt-[38px] flex gap-[74px]'>
      <div>
        <ProfileSideBar/>
      </div>
      <div className='max-w-[895px] w-full flex flex-col gap-28'>
        <UpdateForm/>
        <UpdateForm/>
      </div>
    </section>
  )
 }

export default Profile