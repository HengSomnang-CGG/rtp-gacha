import { Link } from "@remix-run/react";
import RtpCard from "./RtpCard";
import RtpHeader from "./RtpHeader";
import RtpSidebar from "./RtpSidebar";
import RtpButton from "~/components/RTP/RtpButton";
import { Games } from "~/model/games";

interface RtpGameProps {
    handleButtonclick: (menu: string) => void;
    activeMenu?: string | undefined;
    handleType?: (type: string) => void;
    type?: string | undefined;
    filteredData: Games[];
    setActiveMenu: (menu: string) => void;
    
}

export default function RtpGame({ handleButtonclick, activeMenu,handleType,type,filteredData,setActiveMenu }: RtpGameProps) {
    const games = filteredData.filter((game) => game?.name === type);    
    return (
        <>
            <RtpButton onClick={handleButtonclick} menus={activeMenu} type={type} rtpButton={games}  />
            <RtpHeader type={type} handleType={handleType} setActiveMenu={setActiveMenu}  />
            <div className="flex mx-3 lg:container lg:mx-auto">
                <RtpSidebar type={type} handleType={handleType} setActiveMenu={setActiveMenu}  />
                <div className="w-full h-full py-8 px-6 bg-inkDefault rounded-[20px]">
                    <div className="grid gap-3 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                        <RtpCard filteredData={games} menus={activeMenu} />
                    </div>
                    <div className="flex justify-center items-center text-center">
                            <div className="z-[1] overflow-hidden w-fit h-fit">
                                <Link to={"https://urlshortenertool.com/RTP-RM"} target="_blank" rel="noopener noreferrer">
                                    <div className="p-[1px] bg-borderJackpot rounded">
                                        <button title="lebih" className="bg-inkLight hover:bg-skyDark min-h-[35px] py-0 px-[22px] cursor-pointer outline-none select-none flex justify-center  text-center w-full border-none transition ease-out duration-150 items-center rounded">
                                            <span className="text-[16px] font-[500] leading-[21px] m-0">
                                                Lihat Semua     
                                            </span>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}   