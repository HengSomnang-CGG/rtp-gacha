import { Link } from "@remix-run/react";

export default function Kontak() {
    return (
        <div className="relative">
            <div id="contact-us" className=" absolute top-[-72px]"></div>
            <fieldset className="flex items-center justify-center p-3 rounded-[20px] border-[2px] border-solid border-secondaryDefault lg:p-[20px] lg:pt-0">
                <legend className="mx-auto px-[20px] text-[24px] lg:text-[32px] font-semibold lg:font-bold leading-[31px] lg:leading-[42px] liearCustom">Kontak</legend>
                <div className="flex flex-wrap justify-between gap-y-[32px] gap-x-0 md:gap-x-[50px] lg:gap-x-[112px] xl:p-5">
                    {
                        items.map((item, index) => (
                            <Link to={item.link} rel="noopener noreferrer" target="_blank" key={index}>
                                <div className="grid grid-cols-[56px_60%] w-[160px] items-center">
                                    <div className="mr-2 lg:mr-4 w-12 h-12 flex items-center justify-center">
                                        <img src={item.imgUrl} alt={item.alt} loading="lazy" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] lg:text-[18px] font-bold leading-[18px] lg:leading-[23px] m-0 capitalize">{item.title}</span>
                                        <span className="text-[14px] lg:text-[16px] font-[400] leading-[18px] lg:leading-[21px] break-normal capitalize">{item.desc}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </fieldset>
        </div>
    );
}

const items = [
    {
        link: "https://api.whatsapp.com/send/?phone=+6287782908588",
        imgUrl: "/images/kontak/whatsapp.webp",
        alt: "whatsapp",
        title: "whatsapp",
        desc: "+6287782908588",
    },
    {
        link: "https://youtube.com/@Spaceman88.official?si=6o29uAtn02rzI1VQ",
        imgUrl: "/images/kontak/youtube.webp",
        alt: "youtube",
        title: "youtube",
        desc: "youtube",
    },
    {
        link: "https://t.me/Spaceman88official",
        imgUrl: "/images/kontak/telegram.webp",
        alt: "telegram",
        title: "telegram",
        desc: "Spaceman88official",
    }
    
]