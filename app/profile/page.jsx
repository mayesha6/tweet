'use client';
import React, { useState } from 'react'
import ProfileSideBar from '../components/ProfileSideBar'
import UpdateForm from '../components/UpdateForm'
import Footer from '../components/Footer';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Mark Jecno',
    email: 'mark-jecno@gmail.com',
    address: '93, Songbird Cir, Blackville, South Carolina, USA-29817'
  })
  return (
    <>
      <section className='md:px-[31px] p-4 md:pt-[38px] flex md:gap-[74px] gap-2 md:pb-[300px] pb-[100px]'>
        <div>
          <ProfileSideBar/>
        </div>
        <div className='max-w-[895px] w-full flex flex-col gap-28'>
          <UpdateForm setFormData={setFormData} buttonText='update' input1='name' input2='email' input3='address' value1={formData.name} value2={formData.email} value3={formData.address} inputType1='text' inputType2='email' inputType3='text' />
          <UpdateForm setFormData={setFormData} buttonText='save changes' input1='current password' input2='new password' input3='confirm password' value1='mayesha' value2='**********' value3='**********' inputType1='password' inputType2='password' inputType3='password'/>
        </div>
      </section>
      <Footer/>
    </>
  )
 }

export default Profile