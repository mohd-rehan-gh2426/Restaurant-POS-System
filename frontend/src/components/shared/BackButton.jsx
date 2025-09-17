import React from 'react'
import {IoArrowBackOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='bg-[#025cca] text-white p-3 text-xl font-bold rounded-full'>
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton