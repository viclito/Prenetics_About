import { useState } from "react"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import {Bars2Icon ,ShoppingCartIcon ,XMarkIcon ,GlobeAltIcon ,CurrencyDollarIcon ,UsersIcon} from '@heroicons/react/24/solid'
import data from "../utils/prod.json"

const Navbar = () => {

    const [active , setActive] = useState(false)
    const [open , setOpen] = useState(false)

  return (
    <div>
        <nav className="lg:flex hidden w-[100%] border-b-2 border-gray-200 fixed bg-white z-30">
            <div className=" max-w-[1100px] m-auto ">
                <div className="flex items-center justify-between gap-4">
                    <img src={logo} alt="" className="p-2"/>
                    <ul className="flex gap-3 text-base font-semibold">
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6" onMouseOver={()=>setOpen(!open)} onMouseLeave={()=>setOpen(false)}>Our Products</a></li>
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6">Learn</a></li>
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6">DNA Report</a></li>
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6">Testimonials</a></li>
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6">Blog</a></li>
                        <li><a href="" className="hover:text-blue-600 duration-500 hover:border-b-4 hover:border-blue-600 pb-6">For Buisness</a></li>
                    </ul>

                    <div className="hidden lg:flex gap-5 ml-24">
                        <GlobeAltIcon className="h-8 w-8"/>
                        <CurrencyDollarIcon className="h-8 w-8"/>
                        <UsersIcon className="h-8 w-8"/>
                        <ShoppingCartIcon className="h-8 w-8"/>
                    </div>
                </div>
            </div>
        </nav>

        <div className="lg:hidden w-[100%] border-b-2 border-gray-200 fixed z-30 bg-white">
            <div className="justify-between flex w-[90%] m-auto items-center">
                <Bars2Icon className={`h-10 w-10 cursor-pointer ${active ? "hidden":"block"}`} onClick={()=>setActive(!active)}/>
                <XMarkIcon className={`h-10 w-10 cursor-pointer ${active ? "block":"hidden"}`} onClick={()=>setActive(false)}/>
                <img src={logo2} alt="" className="p-2"/>
                <ShoppingCartIcon className="h-10 w-10"/>
            </div>
            
        </div>
        <div className={`lg:hidden bg-white absolute w-full z-20 h-screen duration-500  ${active ? "translate-y-0":"-translate-y-full block"}`} >
            <ul className="flex flex-col justify-evenly h-[80%] font-semibold text-2xl pl-8 pt-12">
                <li><a href="" className="hover:text-blue-400 duration-500 ">Our Products</a></li>
                <li><a href="" className="hover:text-blue-400 duration-500">Learn</a></li>
                <li><a href="" className="hover:text-blue-400 duration-500">DNA Report</a></li>
                <li><a href="" className="hover:text-blue-400 duration-500">Testimonials</a></li>
                <li><a href="" className="hover:text-blue-400 duration-500">Blog</a></li>
                <li><a href="" className="hover:text-blue-400 duration-500">For Buisness</a></li>
            </ul>
        </div>
        <div className={`w-screen h-[400px] absolute bg-white z-20 flex pt-28 shadow-md duration-500 ${open ? "translate-y-0":"-translate-y-full"}`}>
            <div className="flex w-[80%] m-auto gap-7">
                {data.map((item,i)=>(
                    <div key={i} className="w-[20%]">
                        <img src={item.img} className="w-[150px] h-[150px]" alt="" />
                        <div className="pt-2 text-2xl font-semibold text-blue-500">{item.title}</div>
                        <div className="font-light pt-5 ">{item.discription}</div>

                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Navbar