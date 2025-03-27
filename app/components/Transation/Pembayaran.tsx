export default function Pembayaran() {
    return (
        <div>
            <fieldset className="rounded-[20px] border-[2px] border-solid border-secondaryDefault">
                <legend className="mx-auto px-[20px]">
                    <span className="text-[24px] lg:text-[32px] font-semibold leading-[31px] lg:leading-[42px] liearCustom">Cara Pembayaran</span>
                </legend>
                <div className="px-3 gap-[15px] lg:gap-8 flex flex-wrap justify-center p-2">
                    {
                        items.map((item, index) => (
                            <div key={index}>
                                <div className="bg-greenDefault w-[68px] h-[32px] lg:w-[124px] lg:h-10 rounded p-[1px] pl-[5px]">
                                    <div className="bg-greenLightest w-full h-full flex items-center relative rounded-none rounded-r">
                                        <div className="flex mr-1">
                                            <img src="/images/active-dot.webp" alt="active-dot" className=" object-contain w-[14px] h-[14px]" />
                                        </div>
                                        <div className="relative h-3 w-[34px] lg:h-[22px] lg:w-[80px]">
                                            <span
                                                style={{
                                                    boxSizing: "border-box",
                                                    display: "block",
                                                    overflow: "hidden",
                                                    width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                }}
                                            >
                                                <img decoding="async" data-nimg="fill" sizes="100vw" src={item.imgUrl} alt={item.alt} loading="lazy"
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: "border-box",
                                                        padding: 0,
                                                        border: "none",
                                                        margin: "auto",
                                                        display: "block",
                                                        width: "0",
                                                        height: "0",
                                                        minWidth: "100%",
                                                        maxWidth: "100%",
                                                        minHeight: "100%",
                                                        maxHeight: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </fieldset>
        </div>
    )
}

const items = [
    {
        imgUrl: "/images/bank/indosatooredoo.webp",
        alt: "indosatooredoo",
    },
    {
        imgUrl: "/images/bank/ocbcbank.webp",
        alt: "obcbc",
    },
    {
        imgUrl: "/images/bank/xlaxiatapng.webp",
        alt: "xlaxiata",
    },
    {
        imgUrl: "/images/bank/jago.webp",
        alt: "jago",
    },
    {
        imgUrl: "/images/bank/bni.webp",
        alt: "bni",
    },
    {
        imgUrl: "/images/bank/cimbbank.webp",
        alt: "cimb",
    },
    {
        imgUrl: "/images/bank/bankbri.webp",
        alt: "bri",
    },
    {
        imgUrl: "/images/bank/gopay.webp",
        alt: "gopay",
    },
    {
        imgUrl: "/images/bank/linkaja.webp",
        alt: "linkaja",
    },
    {
        imgUrl: "/images/bank/mandiri.webp",
        alt: "mandiri",
    },
    {
        imgUrl: "/images/bank/jenius.webp",
        alt: "jenius",
    },
    {
        imgUrl: "/images/bank/telkomsel.webp",
        alt: "telkomsel",
    },
    {
        imgUrl: "/images/bank/dana.webp",
        alt: "dana",
    },
    {
        imgUrl: "/images/bank/permatabank.webp",
        alt: "permata",
    },
    {
        imgUrl: "/images/bank/ovo.webp",
        alt: "ovo",
    },
    {
        imgUrl: "/images/bank/paninbank.webp",
        alt: "panin",
    },
    {
        imgUrl: "/images/bank/bsibank.webp",
        alt: "bsi",
    },
    {
        imgUrl: "/images/bank/bca.webp",
        alt: "bca",
    },
    {
        imgUrl: "/images/bank/maybank.webp",
        alt: "maybank",
    },
    {
        imgUrl: "/images/bank/3.webp",
        alt: "3",
    },
    {
        imgUrl: "/images/bank/seabank.webp",
        alt: "sea",
    }
]