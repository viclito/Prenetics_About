import logo from "../assets/logo.png" 

const Footer = () => {
  return (
    <div className="w-screen bg-slate-100 pt-16 pb-6">
        <img src={logo} alt="" className="lg:pl-32 pl-14"/>
        <div className="lg:max-w-[1200px] m-auto flex lg:flex-row flex-col-reverse border-b-2 border-gray-300 pb-10">
            <div className="lg:w-[65%] w-[90%] m-auto flex gap-10">
                <div className="flex flex-col gap-4">
                    <div className="font-bold">Our Product</div>
                    <div className="font-light">Premium DNA test</div>
                    <div className="font-light">Vital DNA Test</div>
                    <div className="font-light">Health DNA Test</div>
                    <div className="font-light">Family PLanning Test</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold">Learn</div>
                    <div className="font-light">About Us</div>
                    <div className="font-light">Technology</div>
                    <div className="font-light">DNA privacy</div>
                    <div className="font-light">FAQ</div>
                    <div className="font-light">Contact Us</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-semibold ">DNA Reports</div>
                    <div className="font-semibold ">Teatimonials</div>
                    <div className="font-semibold ">Blog</div>
                    <div className="font-semibold ">Refer a Friend</div>
                    <div className="font-semibold ">Family PLanning Test</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold">For Buisness</div>
                    <div className="font-light">For Employers</div>
                    <div className="font-light">For Corporate Gifting</div>
                    <div className="font-light">For Exclusive Distributors</div>
                </div>
            </div>

            <div className="lg:w-[35%] w-[90%] m-auto flex flex-col gap-5">
                <div className="text-2xl font-semibold">Want 25% off your first purchase?</div>
                <div>Join our newsletter and gain privileged access to exclusive offers, sneak peeks, and 25% off your first order!</div>
                <div className="w-[350px] bg-white flex items-center py-3 px-8 rounded-lg">
                    <input type="text" placeholder="Enter your email address" className="outline-none"/>
                </div>
                <button className="w-[300px] py-3 px-6 border-2 border-sky-400 rounded-[30px] bg-sky-500 text-white mt-5 mb-7">Get my discount now</button>


            </div>
        </div>

        <div className="flex lg:pl-36 md:pl-20 gap-5">
            <div className="font-light text-sm">Tearms of Service</div>
            <div className="font-light text-sm">Privacy Poclicy</div>
            <div className="font-light text-sm">Informed Consent</div>
        </div>

    </div>
  )
}

export default Footer