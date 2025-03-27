import { Link } from "@remix-run/react";
import { useState } from "react";

export default function HeroSection() {
    const [showMore, setShowMore] = useState(false);
    const text = `Gacor Gampang Menang, destinasi terbaik untuk penggemar slot gacor yang menginginkan pengalaman berjudi online yang menyenangkan dan mengasyikkan. Sebagai situs slot gacor terpercaya, kami menawarkan berbagai fasilitas terlengkap untuk memastikan Anda dapat menikmati permainan slot dengan nyaman. Dengan koleksi situs slot gacor dari provider ternama seperti Pragmatic Play, PG Soft, Joker Gaming, dan lainnya SPACEMAN88 siap memberikan pengalaman berjudi yang tak terlupakan.
                Untuk itu para player bisa dengan tenang bermain spaceman slot karena kami memiliki sistem keamanan terbaik yang menjaga setiap transaksi dan informasi pribadi Anda tetap terlindungi. Tim customer support kami juga siap membantu Anda`
    return (
        <div className="bg-fixed">
            <section className="px-1 w-full my-0 mx-auto">
                <div
                    style={{
                        backgroundColor: "rgb(51, 51, 51)",
                    }}
                    className="rounded-xl p-6 my-10 lg:container lg:mx-auto"
                >
                    <div className="overflow-hidden">
                        <span className="leading-[1.2] m-0 font-normal">
                            <h1 className="text-center text-[1.4em] my-[0.83em] font-[800]">
                                SPACEMAN88 🛸 Situs Spaceman Slot Gacor Gampang Menang Pragmatic Play
                            </h1>
                            <p className="text-justify lg:hidden">
                                Selamat datang di Situs {" "}
                                <strong className="font-bold text-yellow-300 underline">
                                    <Link to={"https://barkinbeanscoffeeco.com/"} target="_blank" rel="noopener noreferrer">
                                        Spaceman Slot
                                    </Link>
                                </strong>
                                {" "}
                                {showMore ? text : `${text.substring(0, 259)}`}
                            </p>
                            <p className="text-justify hidden lg:block">
                                Selamat datang di Situs {" "}
                                <strong className="font-bold text-yellow-300 underline">
                                    <Link to={"https://barkinbeanscoffeeco.com/"} target="_blank" rel="noopener noreferrer">
                                        Spaceman Slot
                                    </Link>
                                </strong>
                                {" "}
                                {text}
                            </p>
                        </span>
                    </div>
                    <div className="mt-8 flex flex-col items-center lg:hidden">
                        <div className="border-[1px] border-solid border-skyLightest w-full mb-8"></div>
                        <div className="w-fit">
                            <div className=" cursor-pointer flex flex-row items-center"
                                onClick={() => setShowMore(!showMore)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setShowMore(!showMore);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                            >
                                <span className="text-[18px] font-[300] leading-[23px] text-primaryLight liearCustom inline">
                                    {showMore ? "Tutup" : "Lihat lebih banyak"}
                                </span>
                                <div className="flex flex-row items-center ">
                                    <div className="mt-1"></div>
                                    {
                                        showMore ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="url(#:r4:)" d="M17.639 13.966a.76.76 0 1 1-1.075 1.075l-4.413-4.413-4.413 4.413a.76.76 0 1 1-1.075-1.075l4.78-4.78a1 1 0 0 1 1.415 0l4.78 4.78Z"></path><defs><linearGradient id=":r4:" x1="7.632" x2="13.959" y1="12.05" y2="12.05" gradientUnits="userSpaceOnUse"><stop stopColor="#D9AD57"></stop><stop offset="0.361" stopColor="#F1E69F"></stop><stop offset="0.674" stopColor="#FAEF9F"></stop><stop offset="1" stopColor="#DCAA52"></stop></linearGradient></defs></svg>
                                        ) :
                                            (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="url(#:rdr:)" d="M6.362 10.038a.76.76 0 0 1 1.075-1.075l4.413 4.413 4.412-4.413a.76.76 0 1 1 1.075 1.075l-4.78 4.78a1 1 0 0 1-1.415 0l-4.78-4.78Z"></path><defs><linearGradient id=":rdr:" x1="16.368" x2="10.042" y1="11.954" y2="11.954" gradientUnits="userSpaceOnUse"><stop stopColor="#D9AD57"></stop><stop offset="0.361" stopColor="#F1E69F"></stop><stop offset="0.674" stopColor="#FAEF9F"></stop><stop offset="1" stopColor="#DCAA52"></stop></linearGradient></defs></svg>

                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}