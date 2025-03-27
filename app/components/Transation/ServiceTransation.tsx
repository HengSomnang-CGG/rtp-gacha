export default function ServiceTransation() {
    return (
        <>
            <fieldset className="pt-3 px-[20px] pb-[20px] rounded-[20px] border-[2px] border-solid border-secondaryDefault">
                <legend className="mx-auto px-[20px]">
                    <span className=" text-[24px] lg:text-[32px] font-bold leading-[31px] lg:leading-[42px] liearCustom">Service</span>
                </legend>
                <div className="flex flex-col lg:flex-row  flex-1 justify-between">
                    <div className="w-full  lg:w-[33%]">
                        <div className="flex itemc-center">
                            <div className="flex flex-1 flex-col">
                                <span className="text-[18px] lg:text-[24px] font-bold leading-[23px] lg:leading-[31px] m-0">Deposit</span>
                                <div className="mb-1"></div>
                                <span className="text-[14px] lg:text-[16px] font-normal leading-[21px]">Waktu rata-rata</span>
                            </div>
                            <div className="flex items-end">
                                <span className="text-[32px] lg:text-[48px] font-bold leading-[42px] lg:leading-[62px] m-0">01</span>
                                <span className="text-[14px] lg:text-[18px] font-normal leading-[23px]">m</span>
                            </div>
                        </div>
                        <div className="bg-skyLightest h-3 rounded-[20px] mt-4">
                            <div className="w-[35%] bg-primaryDefault h-full rounded-[20px] "></div>
                        </div>
                    </div>
                    <div className="flex w-[2px] my-2 mx-6 bg-skyLightest"></div>
                    <div className="w-full  lg:w-[33%]">
                        <div className="flex items-center">
                            <div className="flex flex-1 flex-col">
                                <span className="text-[18px] lg:text-[24px] font-bold leading-[31px]">Withdraw</span>
                                <div className="mb-1"></div>
                                <span className="text-[14px] font-normal leading-[18px]">Waktu rata-rata</span>
                            </div>
                            <div className="flex items-end">
                                <span className="text-[32px] lg:text-[48px] font-bold leading-[42px] lg:leading-[62px] m-0">03</span>
                                <span className="text-[14px] lg:text-[18px] font-normal leading-[23px]">m</span>
                            </div>
                        </div>
                        <div className="bg-skyLightest h-3 rounded-[20px] mt-4">
                            <div className="w-[80%] bg-primaryDefault h-full rounded-[20px] "></div>
                        </div>
                    </div>
                    <div className="flex w-[2px] my-2 mx-6 bg-skyLightest"></div>
                    <div className="w-full  lg:w-[33%]">
                        <div className="flex items-center">
                            <div className="flex flex-col lg:flex-row w-full justify-between">
                                <div className="mt-2">
                                    <span className="text-[16px] font-[500] leading-[21px] m-0">Play responsibility</span>
                                    <div className="mt-3 flex">
                                        <img src="/images/gamcare-logo.webp" alt="gamcare-logo" className="mr-6 w-auto h-10" width={40} height={40} loading="lazy" />
                                        <img src="/images/18-icon.webp" alt="gamcare-logo" className="mr-6 w-auto h-10" width={40} height={40}  loading="lazy" />
                                        <img src="/images/BGA-logo.webp" alt="gamcare-logo" className="mr-6 w-auto h-10" width={40} height={40}  loading="lazy"/>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <span className="text-[16px] font-[500] leading-[21px]">Recommended browsers</span>
                                    <div className="mt-3 flex">
                                        <img src="/images/chrome-logo.webp" alt="chrome-logo" className="mr-6 w-auto h-10" width={40} height={40}  loading="lazy"/>
                                        <img src="/images/firefox-logo.webp" alt="chrome-logo" className="mr-6 w-auto h-10" width={40} height={40}  loading="lazy"/>
                                        <img src="/images/safari-logo.webp" alt="chrome-logo" className="mr-6 w-auto h-10" width={40} height={40}  loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}