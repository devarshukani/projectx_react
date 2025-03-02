import Button from './Button'
import educationOutline from '/educationOutline.png'

const MockCalendar = () => {
    return (
        <div className="col-span-2 bg-[#DEE6F2] rounded-xl px-2 py-6 flex flex-col justify-between items-center">
            <div className='flex flex-col items-center gap-3'>
                <img src={educationOutline} alt="" className='w-10 h-10' />
                <p className='text-sm font-semibold text-[#2A2B2D]'>Medical Grand Test</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-1'>
                <p className='text-[28px] font-semibold text-[#2A2B2D]'>26</p>
                <p className='text-[18px] font-semibold text-[#2A2B2D]'>February</p>
            </div>
            <div className='mt-4'>
                <Button name="Prepare Now" textSize={12} />
            </div>
        </div>
    )
}

export default MockCalendar