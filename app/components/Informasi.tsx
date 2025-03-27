import { Link } from "@remix-run/react";

export default function Informasi() {
    return (
        <div className="py-12 relative">
            <div className=" absolute top-[72px]"></div>
            <section className="px-3 w-full my-0 mx-auto">
                <span className="text-[18px] lg:text-[24px] font-bold lg:font-semibold leading-[23px] lg:leading-[31px] flex justify-center text-center m-0 ">Informasi</span>
                <div className="mb-2"></div>
                <div className="flex flex-wrap justify-between lg:container lg:mx-auto">
                    {
                        items.map((item, index) => (
                            <Link key={index} to="#" className="py-3 px-4 w-full lg:w-[49.5%] lg:p-6 relative mb-3 border-secondaryDefault border-[1px] border-solid rounded-[14px] overflow-hidden no-underline bg-inkDark">
                                <img 
                                src="/images/informasi/gold-coin.webp"
                                 alt="gold-coin" 
                                 className=" absolute top-0 bottom-0 left-0 w-[unset] h-full object-contain "
                                 loading="lazy"
                                 />
                                <img 
                                src={item.imgUrl} 
                                alt={item.alt}
                                 className="max-h-[99px] max-w-[124px] w-full h-full bottom-0 right-0 absolute object-contain"
                                 loading="lazy"
                                 />
                                <img src="/images/informasi/information-light.webp" alt="information-light" className=" absolute w-[unset] object-contain right-[-8px] top-2 h-full"
                                loading="lazy"
                                />
                                <span className="text-[24px] font-bold leading-[31px] text-primaryDefault">{item.title}</span>
                                <div className="mb-3"></div>
                                <span className="text-[14px] font-normal leading-[18px] w-[70%]">{item.desc}</span>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
const items = [
    {
        imgUrl: "/images/informasi/gold-bucket.webp",
        alt: "gold-bucket",
        title: "Pendaftaran",
        desc: "Bergabunglah dengan SPACEMAN88 untuk pengalaman bermain yang spektakuler dan menarik. Nikmati Banyak Bonus di situs kami."
    },
    {
        imgUrl: "/images/informasi/gold-gift.webp",
        alt: "gold-gift",
        title: "Permainan Slot",
        desc: "Penyedia slot online dengan beragam pilihan game menarik yang memudahkan pemain untuk mencapai jackpot."
    },
    {
        imgUrl: "/images/informasi/gold-poker.webp",
        alt: "gold-poker",
        title: "Permainan Live Casino",
        desc: "Platform Pilihan bagi perusahaan-perusahaan terbaik di dunia, dengan pilihan variasi game terbanyak."
    },
    {
        imgUrl: "/images/informasi/emerald-bucket.webp",
        alt: "emerald-bucket",
        title: "Permainan Olahraga",
        desc: "Sportsbook Gaming Platform Terbaik menawarkan lebih banyak game, odds yang lebih tinggi, dan menyediakan pilihan yang lebih banyak untuk pemain."
    },
]