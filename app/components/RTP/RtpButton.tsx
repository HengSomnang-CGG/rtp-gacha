import { useCallback, useEffect, useRef, useState } from "react";

interface RtpFunction {
    onClick: (menu: string) => void;
    menus?: string | undefined;
    type?: string | undefined;
    rtpButton: any | undefined;
}

export default function RtpButton({ onClick, menus, type, rtpButton }: RtpFunction) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [randomTags, setRandomTags] = useState<{ [key: string]: string }>({});

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleClick = useCallback((menu: any) => {
        onClick(menu);
    }, [onClick]);

    const filteredMenu = rtpButton.filter((item: any) => item.name === type)[0];

    useEffect(() => {
        if (!filteredMenu?.data) return;

        const updateRandomTags = () => {
            const newRandomTags: { [key: string]: string } = {};

            filteredMenu.data.forEach((item: any) => {
                if (item.tags?.length > 0) {
                    const randIndex = Math.floor(Math.random() * item.tags.length);
                    newRandomTags[item.name] = item.tags[randIndex];
                }
            });

            setRandomTags(newRandomTags);
        };

        updateRandomTags(); // initial
        const interval = setInterval(updateRandomTags, 3000);

        return () => clearInterval(interval);
    }, [filteredMenu]);

    return (
        <div className="relative 2xl:mx-48 mt-8">
            <section className="px-3 w-full mx-auto my-0">
                <div className="mt-2 mb-3 flex flex-col">
                    <div className="flex items-center relative gap-1 justify-center">
                        <button title="left" type="button" className="w-[20px] h-[20px] flex-shrink-0"
                            onClick={() => scroll("left")}
                        >
                            <img 
                            src="/images/RTPImage/arrow-left-light-jackpot.webp" 
                            alt="" 
                            className="w-full h-full"
                            sizes="100vw"
                            srcSet={`/images/RTPImage/arrow-left-light-jackpot.webp 1x, /images/RTPImage/arrow-left-light-jackpot.webp 2x`}
                            />
                        </button>

                        <div className="w-auto flex relative rounded-[66px] overflow-x-scroll overscroll-x-auto"
                            style={{
                                scrollbarWidth: 'none',
                                background: "none"
                            }}
                            ref={scrollContainerRef}
                            onMouseEnter={() => { document.body.style.overflow = 'hidden'; }}
                            onMouseLeave={() => { document.body.style.overflow = 'auto'; }}
                            onWheel={(e) => {
                                scroll(e.deltaY < 0 ? 'left' : 'right');
                            }}
                        >
                            {filteredMenu?.data.map((item: any, index: number) => (
                                <div className="relative w-auto overflow-visible " key={index}>
                                    {randomTags[item.name] && (
                                        <img
                                            src={randomTags[item.name]}
                                            alt="tag"
                                            className="h-6 absolute object-contain right-[-1%] top-[5%] z-[1]"
                                            loading="lazy"
                                        />
                                    )}

                                    <button
                                        onClick={() => handleClick(item.name)}
                                        className="hover:bg-transparent opacity-[1] w-[112px] h-[56px] min-w-[112px] min-h-[56px] flex justify-center items-center cursor-pointer transition duration-200 relative border-r border-[#6B6B6B] bg-[#1E1E1E]"
                                    >
                                        {menus === item.name && (
                                            <div className="inset-0 absolute z-0">
                                                <div
                                                    className="w-full h-full bg-white"
                                                    style={{ filter: "brightness(0.75)" }}
                                                ></div>
                                            </div>
                                        )}
                                        <span className="box-border inline-block overflow-hidden opacity-[1] border-0 m-0 p-0 relative max-w-full">
                                            <span className="box-border block opacity-[1] border-0 m-0 p-0 relative max-w-full">
                                                <img
                                                    alt=""
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2792%27%20height=%2736%27/%3e"
                                                    className="block max-w-full opacity-[1] border-0 m-0 p-0"
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </span>
                                            <img
                                                alt={item.name}
                                                src={item.image}
                                                height={100}
                                                width={100}
                                                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain"
                                                loading="lazy"
                                            />
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button className="w-[20px] h-[20px] flex-shrink-0" title="right" type="button" onClick={() => scroll("right")}>
                            <img 
                            src="/images/RTPImage/arrow-right-light-jackpot.webp" 
                            alt="" 
                            className="w-full h-full"
                            sizes="100vw"
                            srcSet={`/images/RTPImage/arrow-right-light-jackpot.webp 1x, /images/RTPImage/arrow-right-light-jackpot.webp 2x`}
                            />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
