import { Link } from "@remix-run/react";

export default function HeaderTop() {
    return(
        <>
             <span className=" box-border overflow-hidden bg-none opacity-[1] absolute top-0 bottom-0 left-0 right-0">
                <img src="images/header-bg-dark.webp" alt="" className=" absolute z-[-1] box-border min-w-full max-w-full" />
            </span> 
            <section className="max-w-[1580px] px-3 md:px-6 xl:px-12  container mx-auto hidden md:block">
                <div className="pt-2 lg:h-[67px] h-[89px] flex flex-start relative">
                    <div className="flex items-center flex-1 h-[80%]">
                        <div className="overflow-hidden w-fit h-fit">
                            <Link to="https://storage.googleapis.com/hoki-mobile-apk-download/SPACEMAN88.apk" target="_blank" rel="noreferrer">
                                <div className="p-[1px] bg-borderJackpot rounded">
                                    <button className="bg-primaryDefault min-h-[35px] p-[22px] py-0 cursor-pointer outline-none select-none flex justify-center w-full transition ease-out duration-150 items-center rounded">
                                        <span className="liearCustom text-[16px] font-[500] leading-[21px]">Download Aplikasi</span>
                                        <div className="ml-2 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="url(#:R3ahqir36:)" d="M12 1.5A1.5 1.5 0 0 0 10.5 3v8.379l-2.44-2.44a1.5 1.5 0 1 0-2.12 2.122l5 5a1.5 1.5 0 0 0 2.12 0l5-5a1.5 1.5 0 0 0-2.12-2.122l-2.44 2.44V3A1.5 1.5 0 0 0 12 1.5Z"></path><path fill="url(#:R3ahqir36H1:)" d="M5 14.5A1.5 1.5 0 0 0 3.5 16v3A3.5 3.5 0 0 0 7 22.5h10a3.5 3.5 0 0 0 3.5-3.5v-3a1.5 1.5 0 0 0-3 0v3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 5 14.5Z"></path><defs><linearGradient id=":R3ahqir36:" x1="11.948" x2="11.948" y1="4.125" y2="15.15" gradientUnits="userSpaceOnUse"><stop stopColor="#D9AD57"></stop><stop offset="0.361" stopColor="#F1E69F"></stop><stop offset="0.674" stopColor="#FAEF9F"></stop><stop offset="1" stopColor="#DCAA52"></stop></linearGradient><linearGradient id=":R3ahqir36H1:" x1="11.948" x2="11.948" y1="4.125" y2="15.15" gradientUnits="userSpaceOnUse"><stop stopColor="#D9AD57"></stop><stop offset="0.361" stopColor="#F1E69F"></stop><stop offset="0.674" stopColor="#FAEF9F"></stop><stop offset="1" stopColor="#DCAA52"></stop></linearGradient></defs></svg>
                                        </div>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center ">
                        <form action="">
                            <div className="flex ">
                                <div className="flex flex-col justify-between">
                                    <div className=" onverflow-hidden w-fit h-fit flex">
                                        <Link to="https://urlshortenertool.com/RTP-RM" target="_blank" rel="noopener noreferrer">
                                            <div className="p-[1px] bg-borderJackpot rounded ">
                                                <button type="button" className="min-h-8 py-0 px-[15px] bg-primaryDefault hover:bg-hoverNewTheme  cursor-pointer outline-none select-none flex justify-center w-full items-center transition ease-out duration-150 rounded">
                                                    <span className="c-bGnIb font-bold text-[14px] liearCustom">MASUK</span>
                                                </button>
                                            </div></Link>
                                        <div className="px-1"></div>
                                        <div className="onverflow-hidden w-fit h-fit">
                                            <Link to="https://urlshortenertool.com/RTP-RM" target="_blank" rel="noopener noreferrer">
                                                <div className="p-[1px] rounded bg-white hover:bg-[#f1f1f1]">
                                                    <button type="button" className="min-h-8 py-0 px-[15px] cursor-pointer outline-non select-none felx justify-center w-full items-center transition ease-out duration-150 rounded">
                                                        <span className="text-black font-bold  text-[14px]">DAFTAR</span>
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}