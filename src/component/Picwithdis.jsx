import one from "../assets/one.webp"
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"

const Picwithdis = () => {
  return (
    <div>
        <div className="flex lg:flex-row flex-col-reverse max-w-[1300px] m-auto mt-20 items-center gap-10">
            <div className="lg:w-[50%] flex gap-6 flex-col w-[90%]">
                <div className="font-semibold text-3xl">Actionable insights to jumpstart your health journey</div>
                <div>Achieve your every health goal with information and insights provided by our tests’ comprehensive DNA reports. Discover your personalised path to losing weight, improving nutrition, or getting fit, and learn how you can optimise your overall well-being by uncovering how your DNA influences your stress levels, sleep, skin, behaviour, talents, traits, and more.</div>
            </div>
            <div className="lg:w-50% lg:scale-110 relative lg:left-12">
                <img src={one} alt="" />
            </div>
        </div>


        <div className="flex lg:flex-row-reverse flex-col-reverse max-w-[1300px] m-auto mt-20 items-center gap-10">
            <div className="lg:w-[50%] flex gap-6 flex-col w-[90%]">
                <div className="font-semibold text-3xl">Actionable insights to jumpstart your health journey</div>
                <div>Achieve your every health goal with information and insights provided by our tests’ comprehensive DNA reports. Discover your personalised path to losing weight, improving nutrition, or getting fit, and learn how you can optimise your overall well-being by uncovering how your DNA influences your stress levels, sleep, skin, behaviour, talents, traits, and more.</div>
            </div>
            <div className="lg:w-50% lg:scale-110 relative lg:right-10 flex items-center justify-center">
                <img src={two} alt="" />
            </div>
        </div>



        <div className="flex lg:flex-row flex-col-reverse max-w-[1300px] m-auto mt-20 items-center gap-10">
            <div className="lg:w-[50%] flex gap-6 flex-col w-[90%]">
                <div className="font-semibold text-3xl">Actionable insights to jumpstart your health journey</div>
                <div>Achieve your every health goal with information and insights provided by our tests’ comprehensive DNA reports. Discover your personalised path to losing weight, improving nutrition, or getting fit, and learn how you can optimise your overall well-being by uncovering how your DNA influences your stress levels, sleep, skin, behaviour, talents, traits, and more.</div>
            </div>
            <div className="lg:w-50% lg:scale-110 relative lg:left-12">
                <img src={three} alt="" />
            </div>
        </div>




        <div className="flex lg:flex-row-reverse flex-col-reverse max-w-[1300px] m-auto mt-20 items-center gap-10">
            <div className="lg:w-[50%] flex gap-6 flex-col w-[90%]">
                <div className="font-semibold text-3xl">Actionable insights to jumpstart your health journey</div>
                <div>Achieve your every health goal with information and insights provided by our tests’ comprehensive DNA reports. Discover your personalised path to losing weight, improving nutrition, or getting fit, and learn how you can optimise your overall well-being by uncovering how your DNA influences your stress levels, sleep, skin, behaviour, talents, traits, and more.</div>
            </div>
            <div className="lg:w-50% lg:scale-110relative lg:right-12">
                <img src={four} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Picwithdis