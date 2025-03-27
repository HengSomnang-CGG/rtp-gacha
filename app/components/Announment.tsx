import { useEffect, useState } from "react";

export default function Announcement() {
    const [today, setDate] = useState<Date | null>(null); // Initially null to avoid mismatch

    useEffect(() => {
        setDate(new Date()); // Set the initial date on the client
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    if (!today) {
        return <div>Loading...</div>; // Prevents hydration issues
    }

    // Formatting date
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();

    // Formatting time in 12-hour format
    const hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12-hour format

    // Timezone offset (example: GMT+7)
    const timezoneOffset = 7;
    const gmtString = `(GMT+${timezoneOffset})`;

    // Final formatted date-time string
    const formattedDateTime = `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm} ${gmtString}`;

    return (
        <div className="h-6 flex items-center bg-inkLight xl:px-56">
            <section className="h-full w-full pl-3 my-0 mx-auto">
                <div className="flex flex-row items-center">
                    <div className="flex items-center px-1">
                        <span className="mr-[8px] text-white">Informasi</span>
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M12.667 8.5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1h-1.5Zm.632 4.435a.5.5 0 0 1-.699.101l-1.214-.903a.5.5 0 1 1 .597-.803l1.214.904a.5.5 0 0 1 .102.7Zm-1.265-8.287a.5.5 0 1 1-.603-.798l1.169-.882a.5.5 0 1 1 .602.799l-1.168.88ZM4 12.666a.5.5 0 0 1-.5-.5V10H2.333a.964.964 0 0 1-.708-.292A.964.964 0 0 1 1.333 9V7c0-.278.098-.514.292-.708A.964.964 0 0 1 2.333 6h3l3.334-2v8l-3.334-2H4.5v2.166a.5.5 0 0 1-.5.5Zm5.333-2.433V5.766c.3.267.542.592.725.976.184.383.275.802.275 1.258 0 .455-.091.875-.275 1.258a3.046 3.046 0 0 1-.725.975Z" fill="#FFFFFF"></path>
                        </svg>
                    </div>
                    <div className="overflow-hidden flex flex-1 items-center h-full">
                        <div className="marquee-text h-auto block overflow-hidden relative flex-[100%] bg-white">
                            <div className="text-[12px] leading-[22px] whitespace-nowrap text-black font-normal tracking-wider animate-marquee">
                            SELAMAT DATANG DI SITUS LIVE SPACEMAN SLOT RESMI PRAGMATIC PLAY DI INDONESIA BOSSKU... TERBANG TINGGI TO THE MOON & JACKPOT BERSAMA SPACEMAN88
                            </div>
                        </div>
                        <div className="items-center ml-2 hidden lg:block">
                            <span className="whitespace-nowrap text-[14px] font-[400] leading-[18px]">
                                {formattedDateTime}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
