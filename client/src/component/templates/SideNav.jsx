import React from 'react'
import { Link } from 'react-router-dom'
import home from "/home.png"
import question from "/marked.png"
import play from "/play.png"
import bookmark from "/saved.png"
import tests from "/scholarship.png"
import setting from "/settings.png"


const SideNav = () => {
  return (
    <div className='w-[8%] flex flex-col justify-center items-center bg-[#ffffff]'>
      <div className=' bg-[#235391]  font-semibold text-white w-[12vh] h-[12vh] rounded-xl flex justify-center items-center'>
        <p className='text-lg font-sans'>Logo</p>
      </div>

      <div className='mt-[110%] flex flex-col items-center gap-12'>
        <Link to="/"><img className='h-[4.5vh]' src={home} alt="" /></Link>
        <Link><img className='h-[3.8vh]' src={play} alt="" /></Link>
        <Link><img className='h-[4.5vh]' src={question} alt="" /></Link>
        <Link to="/test"><img className='h-[4.5vh]' src={tests} alt="" /></Link>
        <Link><img className='h-[4vh]' src={bookmark} alt="" /></Link>
        <Link><img className='h-[4vh]' src={setting} alt="" /></Link>

      </div>
      
    </div>
  )
}

export default SideNav