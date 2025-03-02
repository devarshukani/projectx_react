
const HeroImageText = () => {
    return (
        <div className="bg-[url('/homeHeroImage.png')] bg-cover bg-no-repeat w-full h-44 mt-6 rounded-lg flex flex-col justify-center gap-2 px-6">
            {/* <img src={homeHeroImage} alt='hero'/> */}
            <p className='text-2xl font-semibold text-white'>Good evening, Jainam</p>
            <p className='text-[14px] font-normal text-white'>Let’s crack Neet like a topper<br />Beat the Neet with </p>
        </div>
    )
}

export default HeroImageText