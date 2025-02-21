import React from 'react'
import timerIcon from "/timer.png";
import paperIcon from "/paper_icon.png";
import bookIcon from "/book.png"


const MahayudhTestSeries = () => {
  return (
     <div className="px-7 flex justify-start items-center h-[25vh] rounded-xl bg-[#fafafa]">
          <div className="p-5 rounded-lg h-[19vh] w-[19vh] bg-[#dee6f2] ">
            {" "}
            logo{" "}
          </div>
    
          <div className="ml-5">
            <h1 className="text-black text-xl font-semibold">Medical Test Series</h1>
            <p className='text-zinc-500 font-semibold'>Mar 1 - 11::15 pm</p>
            <p className="mt-1 text-lg text-zinc-500 flex items-center">
              <img className="h-[2.2vh] inline-block" src={timerIcon} alt="" />
              210 min
              <img className="ml-2 h-[2.2vh] inline-block" src={paperIcon} alt="" />
              200 Q
            </p>
            <p className='text-zinc-500 mt-1 flex items-center'>
                <img className="mr-1 h-[2.2vh] inline-block" src={bookIcon} alt="" />
                Medicine, Surgery & Pathology</p>
          </div>
        </div>
  )
}

export default MahayudhTestSeries