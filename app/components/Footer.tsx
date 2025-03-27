import { Link } from "@remix-run/react";

export default function Footer() {
    const currentDate = new Date().getFullYear();
    return (
        <>
            <div className="mb-16 lg:mb-0 py-[20px] bg-[#1e1e1e]">
                <section className="w-full my-0 mx-auto px-3">
                    <div className="flex flex-col text-center justify-items-center">
                        <span className="text-[14px] font-[400] leading-[18px] ">
                            ©{currentDate} Raja Gacha. All rights reserved.
                        </span>
                    </div>
                </section>
            </div>

            <footer className="flex  flex-row fixed bottom-0 z-[10000] h-[60px] w-full items-center lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="375" height="60" viewBox="0 0 375 60" fill="none" className=" absolute w-full"><path fill="#383838" fillRule="evenodd" d="M155 5.223A5.224 5.224 0 0 0 149.777 0H14C6.268 0 0 6.268 0 14v66h375V14c0-7.732-6.268-14-14-14H225.223A5.224 5.224 0 0 0 220 5.223v5.222l-.002.002c-.001 0-.002 0-.002.002.003.168.004.337.004.507C220 28.1 205.449 42 187.5 42 169.551 42 155 28.101 155 10.956a28.49 28.49 0 0 1 .002-.51l-.002-.001V5.223Z" clipRule="evenodd"></path></svg>
                <div className=" absolute bg-inkLight inset-[0px_60%_0px_0px] rounded-tl-[14px]"></div>
                <div className=" absolute bg-inkLight inset-[0px_0px_0px_60%] rounded-tl-[14px]"></div>
                {
                    footer.map((item, index) => (
                        <div className="h-full relative flex flex-1 z-[1] select-none justify-center items-center" key={index}>
                            <Link to={item.url} target="_blank" rel="noopener noreferrer" >
                                <div className="cursor-pointer flex list-none flex-col justify-center items-center select-none">
                                    {
                                        !item.center!
                                            ? (<div dangerouslySetInnerHTML={{ __html: item.icons }} />)
                                            : (
                                                <>
                                                    <div className="w-[62px] h-[62px] absolute top-[-22px]  overflow-hidden flex justify-center items-center rounded-[50%]">
                                                        <div className="w-[58px] h-[58px] rounded-[50%] flex justify-center items-center bg-inkLighter">
                                                            <div dangerouslySetInnerHTML={{ __html: item.icons }} />
                                                        </div>
                                                    </div>
                                                    <div className="pb-[36px]"></div>
                                                </>
                                            )
                                    }
                                    <span className="text-[12px] font-[500] leading-4 text-center inline liearCustom">
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </footer>
        </>
    )
}

const footer = [
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Beranda",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 33 32" fill="none"><mask id=":Racbir36:" width="33" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{
                            maskType: "alpha"
                        }}><path fill="#D9D9D9" d="M.709 0h32v32h-32z"></path></mask><g mask="url(#:Racbir36:)"><path fill="url(#:Racbir36H1:)" d="M6.042 28V12L16.71 4l10.667 8v16h-8v-9.333h-5.334V28h-8Z"></path></g><defs><linearGradient id=":Racbir36H1:" x1="16.643" x2="16.643" y1="7" y2="19.6" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>
                        `
    },
    {
        url: "https://urlshortenertool.com/RTP-RM",
        title: "Deposit",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 32 32"><path fill="url(#:Rakbir36:)" d="M21.733 18.133c.556 0 1.05-.216 1.484-.65.433-.433.65-.939.65-1.516 0-.556-.217-1.045-.65-1.467-.434-.422-.928-.633-1.484-.633-.555 0-1.05.21-1.483.633-.433.422-.65.911-.65 1.467 0 .577.217 1.083.65 1.516.433.434.928.65 1.483.65Zm-3.8 4.1c-.755 0-1.355-.222-1.8-.666-.444-.445-.666-1.034-.666-1.767v-7.567c0-.755.222-1.35.666-1.783.445-.433 1.045-.65 1.8-.65H26.9c.756 0 1.356.217 1.8.65.444.433.667 1.028.667 1.783V19.8c0 .733-.223 1.322-.667 1.767-.444.444-1.044.666-1.8.666h-8.967ZM6 28c-.511 0-.972-.2-1.383-.6C4.206 27 4 26.533 4 26V6c0-.511.206-.972.617-1.383C5.027 4.206 5.489 4 6 4h20c.533 0 1 .206 1.4.617.4.41.6.872.6 1.383v1.8H17.933c-1.289 0-2.355.422-3.2 1.267-.844.844-1.266 1.9-1.266 3.166V19.8c0 1.267.422 2.322 1.266 3.167.845.844 1.911 1.266 3.2 1.266H28V26c0 .533-.2 1-.6 1.4-.4.4-.867.6-1.4.6H6Z"></path><defs><linearGradient id=":Rakbir36:" x1="16.605" x2="16.605" y1="7" y2="19.6" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {
        url: 'https://urlshortenertool.com/RTP-RM',
        title: "Masuk",
        center: true,
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none"><path fill="url(#:R2sbir36:)" d="M16.5 16.465c-1.491 0-2.711-.474-3.66-1.423-.949-.949-1.423-2.169-1.423-3.66 0-1.49.474-2.711 1.423-3.66C13.79 6.773 15.01 6.3 16.5 6.3s2.711.474 3.66 1.423c.949.949 1.423 2.169 1.423 3.66s-.474 2.711-1.423 3.66c-.949.949-2.169 1.423-3.66 1.423ZM5.656 27.344v-3.186c0-.858.214-1.593.644-2.203.429-.61.982-1.073 1.66-1.389 1.514-.678 2.965-1.186 4.355-1.525a17.609 17.609 0 0 1 4.185-.508c1.4 0 2.79.175 4.168.525 1.379.35 2.825.853 4.338 1.508.7.316 1.265.78 1.695 1.39.429.61.643 1.344.643 2.202v3.186H5.657Z"></path><defs><linearGradient id=":R2sbir36:" x1="16.434" x2="16.433" y1="8.929" y2="19.978" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {
        url: 'https://urlshortenertool.com/RTP-RM',
        title: "Promo",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none"><path fill="url(#:Rb4bir36:)" d="M5 27.938c0 .553.447 1 1 1h8.938v-11.75H5v10.75Zm12.063 1H26c.553 0 1-.447 1-1v-10.75h-9.938v11.75ZM27.5 9.688h-4.613a4.301 4.301 0 0 0 .675-2.313 4.317 4.317 0 0 0-4.312-4.313c-1.294 0-2.46.576-3.25 1.482a4.308 4.308 0 0 0-3.25-1.481 4.317 4.317 0 0 0-4.313 4.312c0 .85.247 1.644.676 2.313H4.5c-.553 0-1 .446-1 1v4.374h11.438V9.689h2.124v5.374H28.5v-4.374c0-.554-.447-1-1-1Zm-12.563-.126H12.75a2.19 2.19 0 0 1-2.188-2.187 2.19 2.19 0 0 1 2.188-2.188 2.19 2.19 0 0 1 2.188 2.188v2.188Zm4.313 0h-2.188V7.376a2.19 2.19 0 0 1 2.188-2.188 2.19 2.19 0 0 1 2.188 2.188 2.19 2.19 0 0 1-2.188 2.188Z"></path><defs><linearGradient id=":Rb4bir36:" x1="15.923" x2="15.923" y1="6.297" y2="19.881" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    },
    {
        url: 'https://urlshortenertool.com/RTP-RM',
        title: "Chat",
        icons: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none"><path fill="url(#:Rbcbir36:)" d="M22.667 12.572C22.667 7.836 17.817 4 11.833 4S1 7.836 1 12.572c0 1.837.734 3.53 1.98 4.928-.699 1.618-1.85 2.904-1.865 2.92a.435.435 0 0 0-.079.466c.068.16.214.257.38.257 1.907 0 3.485-.659 4.62-1.34 1.678.842 3.662 1.34 5.797 1.34 5.985 0 10.834-3.836 10.834-8.572Zm6.354 11.785C30.266 22.964 31 21.267 31 19.43c0-3.584-2.787-6.654-6.734-7.934.047.353.067.712.067 1.077 0 5.673-5.609 10.285-12.5 10.285-.562 0-1.109-.043-1.65-.102 1.64 3.08 5.494 5.245 9.984 5.245 2.135 0 4.12-.493 5.796-1.34 1.136.681 2.714 1.34 4.62 1.34a.41.41 0 0 0 .38-.257.439.439 0 0 0-.078-.466c-.015-.016-1.166-1.297-1.864-2.92Z"></path><defs><linearGradient id=":Rbcbir36:" x1="15.908" x2="15.908" y1="7" y2="19.6" gradientUnits="userSpaceOnUse"><stop stop-color="#D9AD57"></stop><stop offset="0.361" stop-color="#F1E69F"></stop><stop offset="0.674" stop-color="#FAEF9F"></stop><stop offset="1" stop-color="#DCAA52"></stop></linearGradient></defs></svg>`
    }
]