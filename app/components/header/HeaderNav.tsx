import { Link } from "@remix-run/react";

const navitems = [
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Beranda",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Hot Games",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Slot",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Casino",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Sport",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Fishing",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Other",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Togel",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Promotion",
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Bonus",
    },

];
export default function HeaderNav() {
    return (
        <>
            {/* Desktop */}
            <div className="relative hidden lg:block bg-shape h-[55px] ">
                <section className="md:6 xl:px-12 flex items-center w-full my-0 mx-auto container">
                    <div className=" top-0 bottom-0 relative flex flex-1">
                        <Link to="/">
                            <div className="flex w-full items-center">
                                <img
                                    alt="logo"
                                    src="./logo.webm"
                                    className="h-[42px] w-[240px] z-[1] object-contain max-w-full"
                                    loading="lazy"
                                    srcSet={` 
                                        https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 800w,
                                        https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 1600w, 
                                        https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 2400w, 
                                        https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 3200w, 
                                        https://res.cloudinary.com/dmpwyrbid/image/upload/v1742871115/527f326b-aade-4219-88b0-ddfbeb09636d_xvajeq.gif 4000w`}
                                />
                                {/* <video
                                    src="/logo.webm"
                                    className="h-[42px] w-[240px] z-[1] object-contain max-w-full"
                                    autoPlay
                                    loop
                                    muted
                                ></video> */}
                            </div>
                        </Link>
                    </div>
                    <div className="mx-1"></div>
                    <div className="flex justify-evenly overflow-x-scroll ">
                        {navitems.map((item, index) => (
                            <Link to={item.url} className="flex flex-1 px-2 hover:border-l-2 hover:border-r-2 hover:border-gray-300"
                                key={index}
                                target="_blank" rel="noreferrer">
                                <div className="flex flex-1 ">
                                    <div className="flex flex-1 items-center justify-center py-3 px-[10px] cursor-pointer relative">
                                        <div className="flex flex-col items-center">
                                            <span className="w-max text-[18px] font-[400] leading-[23px] liearCustom">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}