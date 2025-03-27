
import { Link } from "@remix-run/react";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

interface HeaderProps {
    toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    return (

        <div className="bg-contain fixed w-full z-[900] shadow-custom">

            {/* Mobile Header */}
            <div className="bg-cover bg-center h-[70px] md:h-[90px] xl:h-[70px] fixed w-full z-[1000] shadow-custom block lg:hidden">
                <span className=" box-border overflow-hidden bg-none opacity-[1] absolute top-0 bottom-0 left-0 right-0">
                    <img src="images/header-bg-dark.webp" alt="" className="absolute z-[-1] top-0 left-0 w-full h-full object-cover" />
                </span>
                <section className="px-3 h-full relative">
                    <div className="flex flex-1 justify-between items-center h-full">
                        <div className="relative ">
                            <Link to="/" className="block" aria-label="Read more about Seminole tax hike">
                                <div className="flex h-full items-center">
                                    <img alt="" 
                                    src="https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif" 
                                    className="max-w-[150px] w-full h-auto object-contain"
                                    loading="lazy" 
                                    sizes="(min-width: 36em) 33.3vw, 100vw"
                                    // srcSet={` 
                                    //     https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 800w,
                                    //     https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 1600w, 
                                    //     https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 2400w, 
                                    //     https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 3200w, 
                                    //     https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 4000w`}
                                    />
                                    {/* <video
                                        src="/logo.webm"
                                        className="max-w-[150px] w-full h-auto object-contain"
                                        autoPlay
                                        loop
                                        muted
                                    /> */}
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="overflow-hidden w-fit h-fit">
                                <Link to="https://urlshortenertool.com/RTP-RM" target="_blank" rel="noopener noreferrer">
                                    <div className="p-[1px] bg-borderJackpot rounded">
                                        <button title="register" type="button" className="min-h-[35px] py-0 px-[22px] cursor-pointer outline-none select-none flex justify-center items-center w-full text-white transition ease-out duration-[150] bg-shape">
                                            <span className="text-skyLightest text-[16px] font-500 leading-[21px]">
                                                <span className="liearCustom">
                                                    Daftar
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="mr-5"></div>
                            <div>
                                <button type="button"
                                    title="Menu"
                                    className="w-[25px] h-[20px] relative my-2 mx-auto transform rotate-0 transition ease-in-out duration-500 border-none bg-inherit "
                                    onClick={toggleSidebar}
                                >
                                    <span className="block absolute h-[2.4px] w-full bg-skyLightest rounded-[9px] transition-all ease-in-out duration-200 top-0"></span>
                                    <span className="block absolute h-[2.4px] w-full bg-skyLightest rounded-[9px] transition-all ease-in-out duration-200 top-[9px]"></span>
                                    <span className="block absolute h-[2.4px] w-full bg-skyLightest rounded-[9px] transition-all ease-in-out duration-200 top-[9px]"></span>
                                    <span className="block absolute h-[2.4px] w-full bg-skyLightest rounded-[9px] transition-all ease-in-out duration-200 top-[18px]"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full h-1 bg-borderJackpot "></div>
            </div>

            {/* desktop header */}
            <HeaderTop />
            <div className="w-full h-1 bg-borderJackpot md:hidden lg:block"></div>
            <HeaderNav />
        </div>
    )
}