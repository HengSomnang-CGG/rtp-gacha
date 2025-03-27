export default function GameProviders() {
    return (
        <div className="bg-inkDefault">
            <section className="px-3 w-full my-0 mx-auto">
                <div className="flex flex-wrap items-center justify-center pt-8 lg:container lg:mx-auto">
                    {
                        items.map((item, index) => {
                            return (
                                <div className="mb-8 mx-[20px] w-[80px] h-[40px] lg:w-[160px] relative lg:transition lg:duration-100 lg:grayscale hover:grayscale-0" key={index}>
                                    <span 
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width:"initial",
                                        height:"initial",
                                        background:"none",
                                        opacity: 1,
                                        border:0,
                                        margin:0,
                                        padding:0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                    }}
                                    >
                                        <img src={item.img} alt={item.alt} 
                                        loading="lazy"
                                        srcSet={`
                                            ${item.img} 1x,
                                            ${item.img} 2x
                                            `}
                                        decoding="async"
                                        data-nimg="fill"
                                        sizes="100vw"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border:"none",  
                                            margin:"auto",
                                            display: "block",
                                            width:0,
                                            height:0,
                                            minWidth: "100%",
                                            minHeight: "100%",
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain",
                                        }}
                                        />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

const items = [
    {
        img: "https://res.cloudinary.com/dmpwyrbid/image/upload/c_pad,w_127,h_71,ar_16:9/v1742882112/asub_kkzxjz.webp",
        alt: "provider-asub"
    },
    {
        img: "/images/RTPImage/nex4d.webp",
        alt: "provider-nex4d"
    },
    {
        img: "/images/RTPImage/advantplay.webp",
        alt: "provider-advantplay"
    },
    {
        img: "/images/RTPImage/hacksaw.webp",
        alt: "provider-hacksaw"
    },
    {
        img: "https://res.cloudinary.com/dmpwyrbid/image/upload/c_pad,w_127,h_71,ar_16:9/v1742882112/octoplay_pdgpex.webp",
        alt: "provider-octoplay"
    },
    {
        img: "/images/RTPImage/pragmaticplay.webp",
        alt: "provider-pragmaticplay"
    },
    {
        img: "/images/RTPImage/joker.webp",
        alt: "provider-joker"
    },
    {
        img: "/images/RTPImage/habanero.webp",
        alt:"provider-habanero"
    },
    {
        img:"/images/RTPImage/allbet.webp",
        alt:"provider-allbet"
    },
    {
        img:"/images/RTPImage/cq9.webp",
        alt:"provider-cq9"
    },
    {
        img:"/images/RTPImage/aesexy.webp",
        alt:"provider-aesexy"
    },
    {
        img:"/images/RTPImage/jdbfish.webp",
        alt:"provider-jdbfishing"
    },
    {
        img:"/images/RTPImage/jdb.webp",
        alt:"provider-jdb"
    },
    {
        img:"/images/RTPImage/kingmaker.webp",
        alt:"provider-kingmaker"
    },
    {
        img:"/images/RTPImage/jili.webp",
        alt:"provider-jili"
    },
    {
        img:"/images/RTPImage/fachai.webp",
        alt:"provider-fachai"
    },
    {
        img:"/images/RTPImage/fastspin.webp",
        alt:"provider-fastspin"
    },
    {
        img:"/images/RTPImage/sv388.webp",
        alt:"provider-sv388"
    },
    {
        img:"/images/RTPImage/sbo.webp",
        alt:"provider-sbo"
    },
    {
        img:"/images/RTPImage/pgsoft.webp",
        alt:"provider-pgsoft"
    },
    {
        img:"/images/RTPImage/ion.webp",
        alt:"provider-ion"
    },
    {
        img:"/images/RTPImage/spade.webp",
        alt:"provider-spadegaming"
    },
    {
        img:"/images/RTPImage/microgaming.webp",
        alt:"provider-microgaming"
    },
    {
        img:"/images/RTPImage/mancala.webp",
        alt:"provider-mancala"
    },
    {
        img:"/images/RTPImage/playstar.webp",
        alt:"provider-playstar"
    },
    {
        img:"https://res.cloudinary.com/dmpwyrbid/image/upload/c_pad,w_127,h_71,ar_16:9/v1742882112/ug_kcwv6y.webp",
        alt:"provider-ug"
    },
    {
        img:"/images/RTPImage/evolution.webp",
        alt:"provider-evolution"
    },
    {
        img:"/images/RTPImage/redtiger.webp",
        alt:"provider-redtiger"
    },
    {
        img:"/images/RTPImage/netent.webp",
        alt:"provider-netent"
    },
    {
        img:"/images/RTPImage/nolimitcity.webp",
        alt:"provider-nolimitcity"
    },
    {
        img:"/images/RTPImage/bigtimegaming.webp",
        alt:"provider-bigtimegaming"
    }
]
