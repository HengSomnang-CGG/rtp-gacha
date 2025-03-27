import { Link } from "@remix-run/react";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
        <div
            className={`fixed right-0 top-0 bottom-0 w-[80%] md:w-[50%] z-[1201] h-full lg:hidden bg-[#1E1E1E] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0.1rem 0px 0.02rem",
            }}
        >
            {/* Close Button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleSidebar} title="Close Sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="url(#gradient)" d="M6.75 18.3a.742.742 0 1 1-1.05-1.05L10.95 12 5.7 6.75A.742.742 0 1 1 6.75 5.7L12 10.95l5.25-5.25a.742.742 0 0 1 1.05 1.05L13.05 12l5.25 5.25a.743.743 0 0 1-1.05 1.05L12 13.05 6.75 18.3Z"></path>
                        <defs>
                            <linearGradient id="gradient" x1="11.959" x2="11.959" y1="6.881" y2="14.047">
                                <stop stopColor="#D9AD57"></stop>
                                <stop offset="0.361" stopColor="#F1E69F"></stop>
                                <stop offset="0.674" stopColor="#FAEF9F"></stop>
                                <stop offset="1" stopColor="#DCAA52"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="border-[#383838] border-[1px]"></div>

            {/* Sidebar Content */}
            <div className="p-6 flex flex-col items-center"
                style={{
                    backgroundImage: "url(/images/header-bg-dark.webp)",
                }}
            >
                <span className="text-white text-center text-[14px]">Selamat Datang</span>
                <span className="text-white text-center text-[14px]">Ayo, bermain dan menang!</span>

                <div className="mt-6 flex space-x-2">
                    <Link to={"#"} className=" p-[1px] rounded bg-borderJackpot" target="_blank" rel="noopener noreferrer">
                        <button className=" bg-primaryDefault text-white px-6 py-2 rounded-md">
                            <span className="liearCustom">Masuk</span>
                        </button>
                    </Link >
                    <Link to={"#"} className=" p-[1px] rounded bg-borderJackpot" target="_blank" rel="noopener noreferrer">
                        <button className="bg-primaryDefault text-white px-6 py-2 rounded-md">
                            <span className="liearCustom">Daftar</span>
                        </button>
                    </Link>

                </div>
            </div>

            {/* Sidebar Links */}
            <div>
                {list.map((item, index) => (
                    <div key={index} className="flex items-center py-2 px-7 hover:bg-[#2E2E2E] cursor-pointer">
                        <Link to={"#"} className="flex items-center text-white" target="_blank" rel="noopener noreferrer">
                            <div dangerouslySetInnerHTML={{ __html: item.icons }} />
                            <span className="ml-3">{item.title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

const list = [
    {

        title: "Promosi",
        icons: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="url(#:r1n:)" fill-rule="evenodd" d="M5.834 2.72a3 3 0 0 0-3.113 3.113l.226 5.883a3 3 0 0 0 .877 2.006L10 19.9a3 3 0 0 0 4.243 0l5.657-5.657a3 3 0 0 0 0-4.243l-6.178-6.177a3 3 0 0 0-2.006-.877L5.834 2.72Zm4.41 7.523a2 2 0 1 0-2.828-2.829 2 2 0 0 0 2.828 2.829Z" clip-rule="evenodd"></path><defs><linearGradient id=":r1n:" x1="11.694" x2="11.694" y1="4.975" y2="14.457" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {
        url: "https://storage.googleapis.com/cuan-mobile-apk-download/Raja Mahjong.apk",
        title: "Download Aplikasi",
        icons: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="url(#:r1o:)" d="M12 1.5A1.5 1.5 0 0 0 10.5 3v8.379l-2.44-2.44a1.5 1.5 0 1 0-2.12 2.122l5 5a1.5 1.5 0 0 0 2.12 0l5-5a1.5 1.5 0 0 0-2.12-2.122l-2.44 2.44V3A1.5 1.5 0 0 0 12 1.5Z"></path><path fill="url(#:r1p:)" d="M5 14.5A1.5 1.5 0 0 0 3.5 16v3A3.5 3.5 0 0 0 7 22.5h10a3.5 3.5 0 0 0 3.5-3.5v-3a1.5 1.5 0 0 0-3 0v3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 5 14.5Z"></path><defs><linearGradient id=":r1o:" x1="11.948" x2="11.948" y1="4.125" y2="15.15" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient><linearGradient id=":r1p:" x1="11.948" x2="11.948" y1="4.125" y2="15.15" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {

        title: "Bantuan",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="url(#:r1q:)" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14c-1.236 0-2 .97-2 2a1 1 0 1 1-2 0c0-1.97 1.503-4 4-4s4 2.03 4 4c0 2.047-1.544 3.14-2.053 3.394-.076.038-.16.075-.22.1l-.027.011-.173.075a2.2 2.2 0 0 0-.342.185C13 13.892 13 13.957 13 14a1 1 0 1 1-2 0c0-.957.574-1.554 1.05-1.882a4.15 4.15 0 0 1 .656-.362c.134-.06.202-.088.249-.107.039-.016.063-.026.098-.043a1.97 1.97 0 0 0 .547-.483c.222-.278.4-.646.4-1.123 0-1.03-.764-2-2-2Zm0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clip-rule="evenodd"></path><defs><linearGradient id=":r1q:" x1="11.939" x2="11.939" y1="4.5" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {

        title: "Hubungi kami",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="url(#:r1r:)" d="M2.978 4.784A2.99 2.99 0 0 1 5 4h14a2.99 2.99 0 0 1 2.022.784L12 10.798 2.978 4.784Z"></path><path fill="url(#:r1s:)" d="M2.033 6.557A3.025 3.025 0 0 0 2 7v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7c0-.15-.011-.299-.032-.443l-9.413 6.275a1 1 0 0 1-1.11 0L2.033 6.557Z"></path><defs><linearGradient id=":r1r:" x1="11.939" x2="11.939" y1="6" y2="14.4" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient><linearGradient id=":r1s:" x1="11.939" x2="11.939" y1="6" y2="14.4" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
]