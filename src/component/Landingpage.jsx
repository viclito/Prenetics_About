import image1 from "../assets/first1.png"
import image2 from "../assets/first2.png"
import china from "../assets/china.webp"

const Landingpage = () => {
  return (
    <div>
        <div className="pt-20  relative">
            <div className="hidden lg:block">
                <img src={image1} alt="" className="w-screen h-[300px] relative"/>
                <h1 className="text-white absolute font-bold text-2xl z-20 top-52 left-20">About Us</h1>
            </div>
            <div className="lg:hidden pt-3">
                <img src={image2} alt="" className="w-screen relative"/>
                <h1 className="text-3xl font-semibold p-8">About Us</h1>
            </div>
        </div>

        <h1 className="text-center pt-28 text-3xl font-semibold text-sky-400 lg:hidden">HEAR FROM OUR FOUNDER, DANNY YEUNG</h1>
        <div className="flex max-w-[1200px] m-auto pt-32 flex-col-reverse lg:flex-row"> 

                <div className="w-[90%] lg:w-[65%] flex flex-col gap-10 m-auto">
                    <h1 className="text-3xl font-semibold text-sky-400 hidden lg:block"> HEAR FROM OUR FOUNDER, DANNY YEUNG</h1>
                    <blockquote className="text-3xl font-medium lg:w-[90%]">At CircleDNA, we empower individuals with valuable health insights to live healthier and happier lives. We give everyone the power to be in control of their own health.</blockquote>
                    <p className="">Danny Yeung, CEO of Prenetics</p>
                    <button className="inline-block py-4 w-48 border-2 border-sky-400 rounded-[30px] text-sky-400 font-semibold text-lg">Play Video</button>
                </div>
            
            <div className="lg:w-[35%] flex justify-center items-center w-[100%]">
                <img src={china} alt="" className="lg:w-[100%] "/>
            </div>
        </div>

        <div className="max-w-[1200px] flex m-auto mt-20 gap-14 flex-col lg:flex-row">
            <div className="flex flex-col w-[90%] lg:w-[50%] gap-6 m-auto">
                <div className="text-2xl font-bold">Our Vision</div>
                <div>In our ideal world, late disease and cancer detection would cease to exist. People would be cured before they even get sick. Every person would be equipped with the information they need to make the best decisions possible for their current and future health. To make this a reality, healthcare and prevention needs to be personalised to each individual. That’s where CircleDNA comes in.</div>
            </div>
            <div className="flex flex-col lg:w-[50%] gap-6 w-[90%] m-auto">
                <div className="text-2xl font-bold">Our Mission</div>
                <div>CircleDNA empowers people to proactively manage their health with insights derived from the most personal source of information there is – your DNA. We are honoured and humbled to unite with others who share our mission, including celebrities, ChangeMakers, and the media. Together, we can work to build a world with good health, prevention, and empowerment for all.</div>
            </div>

        </div>

    </div>
  )
}

export default Landingpage