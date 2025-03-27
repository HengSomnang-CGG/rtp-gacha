export default function StepTransaction() {
    return (
        <div
            style={{
                display: "inherit"
            }}
        >
            <div className="lg:flex flex-1 items-center justify-between hidden">
                <div className="mr-4 flex items-center">
                    <svg className="max-w-[71px] h-fit" xmlns="http://www.w3.org/2000/svg" width="71" height="87" viewBox="0 0 71 87" fill="none" color="linear-gradient(180deg, #D9AD57 12.5%, #F1E69F 31.46%, #FAEF9F 47.86%, #DCAA52 65%)"><path fill="url(#:R19ljqir36:)" d="M43.182 69.397H7.157c-2.184 0-3.922-.566-5.216-1.698C.647 66.567 0 65.152 0 63.454c0-1.699.647-3.316 1.94-4.852L47.792 3.775C49.732 1.592 51.754.5 53.856.5c1.698 0 3.275.606 4.73 1.82 2.427 1.94 3.64 3.76 3.64 5.458 0 .97-.445 2.102-1.335 3.396l-1.455 1.941v43.424H70.23v12.858H59.436V86.5H43.182V69.397Zm.849-12.858V28.762L20.863 56.54h23.168Z"></path><defs><linearGradient id=":R19ljqir36:" x1="34.9" x2="34.9" y1="11.25" y2="56.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D9AD57"></stop><stop offset="0.361" stopColor="#F1E69F"></stop><stop offset="0.674" stopColor="#FAEF9F"></stop><stop offset="1" stopColor="#DCAA52"></stop></linearGradient></defs></svg>
                    <div className="mr-3"></div>
                    <span className=" leading-[62px] text-[28px] xl:text-[48px] liearCustom inline m-0">Langkah Mudah</span>
                </div>
                <div className="flex flex-1 justify-between">
                    {
                        Langkah.map((item) => (
                            <div className="[&:not(:last-child)]:mr-3 xl:[&:not(:last-child)]:mr-5 flex items-center" key={item.id}>
                                <div className="mr-2 xl:mr-4 w-[60px] xl:w-[64px] h-[60px] xl:h-[64px] min-w-[60px] min-h-[60px] xl:min-w-[64px] xl:min-h-[64px] flex items-center justify-center"
                                    style={{
                                        backgroundImage: "url(/images/circle.webp)",
                                    }}
                                >
                                    <span className="mr-1 text-[24px] font-bold leading-[31px] text-center inline liearCustom">
                                        0{item.id}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] font-normal leading-[21px]">Langkah {item.id} </span>
                                    <span className="text-[24px] font-bold leading-[31px]">{item.title}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

const Langkah = [
    {
        id: 1,
        title: "Daftar",
    },
    {
        id: 2,
        title: "Deposit",
    },
    {
        id: 3,
        title: "Main & Menang",
    },
    {
        id: 4,
        title: "Withdraw",
    }
]