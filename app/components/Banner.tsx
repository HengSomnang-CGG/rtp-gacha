import { useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LinksFunction } from "@remix-run/node";


export const links: LinksFunction = () => [
    
];

interface Image {
    src: string,
    alt: string,
}
export default function Banner() {
    const images: Image[] = useMemo(() => {
        return [
            {
                src: "https://res.cloudinary.com/dmpwyrbid/image/upload/v1742884354/banner0_jupqpk.webp",
                alt: 'BUKTI'
            },
            {
                src: "https://res.cloudinary.com/dmpwyrbid/image/upload/v1742884353/banner1_vvu1ge.webp",
                alt: 'promotion'
            },
            {
                src: "images/banners/banner2.webp",
                alt: 'Offer'
            },
            {
                src: "images/banners/banner3.webp",
                alt: 'Win_Promotion'
            },
            {
                src: "images/banners/banner4.webp",
                alt: 'WASPADA'
            },
            {
                src: "images/banners/banner5.webp",
                alt: 'Gates'
            },
            {
                src: "images/banners/banner6.webp",
                alt: 'Tournament'
            },
            {
                src: "images/banners/banner7.webp",
                alt: 'Daily'
            },
        ]
    }, [])

    const imagesdesktop: Image[] = useMemo(() => {
        return [
            {
                src: "/images/banners/desktop/banner.webp",
                alt: 'Spaceman88'
            },
            {
                src: "images/banners/desktop/banner1.webp",
                alt: 'Self_Promotion'
            },
            {
                src: "images/banners/desktop/banner2.webp",
                alt: 'Offering'
            },
            {
                src: "images/banners/desktop/banner3.webp",
                alt: 'Win_Promotion'
            },
            {
                src: "images/banners/desktop/banner4.webp",
                alt: 'Waspadalah'
            },
            {
                src: "images/banners/desktop/banner5.webp",
                alt: 'Gates_of_oplimpus'
            },
            {
                src: "images/banners/desktop/banner6.webp",
                alt: 'Kratos'
            },
            {
                src: "images/banners/desktop/banner7.webp",
                alt: 'Zaus'
            },
        ]
    }, [])

    return (
        <>
            {/* banner mobile */}
            <div className="mx-auto mt-[77px] md:mt-[90px] lg:mt-[145px]  2xl:mt-[150px] md:hidden aspect-auto">
                <div className="bg-no-repeat bg-cover">
                    <div className="relative aspect-auto">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={5000}
                            showArrows={false}
                            showThumbs={false}
                            showStatus={false}
                            swipeable
                            emulateTouch
                        >
                            {images.map((image, index) => (
                                <figure key={index} className="carousel__item">
                                    <img
                                        src={`${image.src}`}
                                        alt={image.alt}
                                        width={500}
                                        height={450}
                                        decoding="async"
                                        srcSet={`${image.src}?w=800 800w, ${image.src}?w=1600 1600w, ${image.src}?w=2400 2400w`}
                                        sizes="(min-width: 36em) 33.3vw, 100vw"
                                        loading={"eager"}
                                        className="w-auto h-auto max-h-[500px] object-center object-fill aspect-auto"
                                    />
                                </figure>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* banner desktop */}
            <div className="mx-auto mt-[77px] md:mt-[90px] lg:mt-[127px]  2xl:mt-[127px] hidden md:block">
                <div className="bg-no-repeat bg-cover">
                    <div className="relative">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={5000}
                            showArrows={false}
                            showThumbs={false}
                            showStatus={false}
                            swipeable
                            emulateTouch
                        >
                            {imagesdesktop.map((image, index) => (
                                <figure key={index} className="carousel__item">
                                    <img
                                        src={`${image.src}`}
                                        alt=""
                                        width={800}
                                        height={450}
                                        decoding="async"
                                        srcSet={`${image.src} 800w, ${image.src} 1600w, ${image.src} 2400w, ${image.src} 3200w, ${image.src} 4000w`}
                                        sizes="(min-width: 36em) 33.3vw, 100vw"
                                        loading={"eager"}
                                        className="w-full max-h-[500px] object-center object-contain"
                                    />
                                </figure>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

