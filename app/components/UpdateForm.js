'use client'
import React, { useState } from 'react'

const UpdateForm = () => {

  const [formData, setFormData] = useState({
    name: 'Mark Jecno',
    email: 'mark-jecno@gmail.com',
    address: '93, Songbird Cir, Blackville, South Carolina, USA-29817'
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated Data:', formData)
  }
 

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-[10px] border-[1.5px] border-[#E6E6E6] flex flex-col gap-6">
      <h2 className="text-2xl !font-poppins !font-medium leading-[150%] text-[#1A1A1A] mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className='relative'>
        <div className='flex flex-col gap-6'>
          {/* name  */}
          <div className='flex gap-2.5 border-2 border-[#A1A1A1] border-dashed px-5 pt-6 pb-[19px] rounded-[13px]'>
              <div>
                <svg  xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#F1874F" stroke="#F1874F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className='w-full'>
                <label htmlFor="name" className='!font-poppins !font-medium text-base text-[#3D3D3D] capitalize leading-0'>name:</label>
                
                <div className='pt-2 text-[#747474]'>
                  <input type="text" placeholder='Enter your name' id='name' className='!font-poppins text-base leading-[25px] text-[#747474] outline-0 capitalize' value={formData.name} onChange={handleChange}/>
                </div>
              </div>
          </div>

          {/* email  */}
          <div className='flex gap-2.5 border-2 border-[#A1A1A1] border-dashed px-5 pt-6 pb-[19px] rounded-[13px]'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg"  width="19" height="19" viewBox="0" fill="#F1874F" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className='w-full'>
                <label htmlFor="email" className='!font-poppins !font-medium text-base text-[#3D3D3D] capitalize leading-0'>email:</label>
                
                <div className='pt-2 text-[#747474]'>
                  <input type="email" placeholder='Enter your email' id='email' className='!font-poppins text-base leading-[25px] text-[#747474] outline-0 capitalize' value={formData.email} onChange={handleChange}/>
                </div>
              </div>
          </div>

          {/* address  */}
          <div className='flex gap-2.5 border-2 border-[#A1A1A1] border-dashed px-5 pt-6 pb-[19px] rounded-[13px]'>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#F1874F" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
              </div>
              <div className='w-full'>
                <label htmlFor="address" className='!font-poppins !font-medium text-base text-[#3D3D3D] capitalize leading-0'>address:</label>
                
                <div className='pt-2 text-[#747474]'>
                  <input type="text" placeholder='Enter your address' id='address' className='!font-poppins text-base leading-[25px] text-[#747474] outline-0 capitalize' value={formData.address} onChange={handleChange}/>
                </div>
              </div>
          </div>

          
        </div>
        {/* submit btn  */}
        <div className='relative right-0'>
          <button
            type="submit"
            className="bg-[#F1874F] text-white px-6 py-2 rounded-[8px] font-semibold hover:bg-[#e67a43] duration-300"
          >
            Update
          </button>
          </div>
      </form>
    </div>
  )
}

export default UpdateForm
