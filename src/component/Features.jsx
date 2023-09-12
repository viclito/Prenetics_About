import final from "../assets/final.webp"
import fea1 from "../assets/fea1.webp"
import fea2 from "../assets/fea2.webp"
import fea3 from "../assets/fea3.webp"
import fea4 from "../assets/fea4.webp"
import fea5 from "../assets/fea5.webp"
import fea6 from "../assets/fea6.webp"



const Features = () => {
  return (
    <div>
        <div className="bg-slate-100 mt-10">
            <div className="flex w-[90%] m-auto gap-4 lg:flex-row flex-col-reverse">
                <div className="flex flex-col gap-5 justify-center lg:w-[50%]">
                    <div className="text-3xl font-semibold">We always put your privacy first</div>
                    <div className="text-xl font-bold">Privacy is in our DNA</div>
                    <div>By testing with CircleDNA, we understand that you’re giving us access to your most personal information. That’s a responsibility we take seriously. Protecting your privacy and data security is our top priority, so you can feel rest assured that we are deeply committed to ensuring you can continue to learn about the stories in your DNA - without worrying about your privacy.</div>

                    <button className="w-[300px] py-3 px-6 border-2 border-sky-400 rounded-[30px] bg-white text-sky-500 mt-5 mb-7">Learn About Our DNA Security</button>
                </div>
                <div className="lg:w-[50%]">
                    <img src={final} alt="" />
                </div>
            </div>
        </div>


        <div className="w-[80%] m-auto mt-12">
            <div className="text-center text-3xl font-semibold">As featured in...</div>
            <div className="lg:flex-row flex flex-col items-center gap-5 lg:justify-between pt-10">
                <img className="h-7" src={fea1} alt="" />
                <img className="h-7" src={fea2} alt="" />
                <img className="h-7" src={fea3} alt="" />
                <img className="h-7" src={fea4} alt="" />
                <img className="h-7" src={fea5} alt="" />
                <img className="h-7" src={fea6} alt="" />
            </div>
        </div>

        <div className="flex h-[400px] w-screen overflow-hidden mt-10 ">
            <div className="border-[60px] border-sky-200 h-[900px] rounded-[100%] p-10 relative -top-[40%] lg:w-[90%] w-[100%] m-auto flex flex-col items-center justify-center">
                <div className="text-center text-3xl font-semibold -mt-32">Join over 600,000 Circlers who have taken control of their health</div>
                <button className="text-white bg-blue-400 px-5 py-3 rounded-[30px] mt-6">Shop Now</button>
            </div>
        </div>

        <div className="w-screen h-16 bg-blue-400">

        </div>
    </div>
  )
}

export default Features