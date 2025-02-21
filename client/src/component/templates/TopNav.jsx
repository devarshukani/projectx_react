import React, { useState } from 'react'
import notification from "/notification.png"
import account from "/account.png"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const TopNav = () => {

  const [category, setCategory] = useState("NEET UG");



  return (
    <div className='p-10 w-full h-[15%] flex justify-between items-center'> 
        <Dropdown 
        title="Category" 
        options={["IIT JEE", "UPSC", "NEET UG"]} 
        func={(e)=>{setCategory(e.target.value)}}/>
        <h2 className='text-3xl'>Name of company</h2>
        <div className="flex justify-between items-center gap-5">
            <img className='h-[4.5vh]' src={account} alt="" />
            <img className='h-[4.5vh]' src={notification} alt="" />
        </div>


    </div>
  )
}

export default TopNav