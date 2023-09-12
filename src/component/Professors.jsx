import {Swiper , SwiperSlide} from "swiper/react"
import "Swiper/css"
import data from "../utils/docs.json"
import { SliderSettings } from "../utils/common"

const Professors = () => {
  return (
    <div>
        <div className="text-3xl font-semibold text-center pt-36">Developed by global leaders in DNA sequencing</div>

        <div className="w-[80%] m-auto mt-10">
            <Swiper {...SliderSettings}>
                {data.map((item ,i)=>(
                    <SwiperSlide key={i}>
                        <div>
                            <img src={item.img} alt="" className=""/>
                            <div className="text-lg font-semibold mt-3 text-center">{item.Name}</div>
                            <div className="mt-2 text-center"> {item.studies}</div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className="flex justify-center mt-10">
            <button className="inline-block py-3 px-8 border-2 border-sky-400 rounded-[30px] text-sky-400 font-semibold text-lg">Learn About Our Science</button>
        </div>
    </div>
  )
}

export default Professors