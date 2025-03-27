import  { useEffect, useState } from "react";

export default function RtpCard({ filteredData, menus }: any) {
    const gamesData = filteredData[0]?.data.find((game: any) => game.name === menus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const games = gamesData?.games || [];

    const [randomTags, setRandomTags] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        if (!games.length) return;

        const updateRandomTags = () => {
            const newTags: { [key: string]: any } = {};

            games.forEach((game: any) => {
                if (game.tags?.length) {
                    const randomIndex = Math.floor(Math.random() * game.tags.length);
                    newTags[game.id] = game.tags[randomIndex];
                }
            });

            setRandomTags(newTags);
        };

        updateRandomTags(); // initial call
        const interval = setInterval(updateRandomTags, 2000); // every 2 seconds

        return () => clearInterval(interval); // cleanup
    }, [games]);

    return (
        <>
            {games.map((game: any, index: number) => {
                const tag = randomTags[game.id];
                return (
                    <div className="flex flex-col relative w-full mb-[24px] cursor-pointer" key={index}>
                        <div className="relative overflow-hidden">
                            <div className=" relative overflow-hidden rounded-[20px]">
                                <div className=" relative w-full pb-[100%]">
                                    <div className=" absolute inset-0">
                                        {tag && (
                                            <div className="absolute left-0 top-0 flex z-[999] transition ease-linear duration-300 overflow-hidden">
                                                <img 
                                                src={tag.url}
                                                alt={tag.name} 
                                                className="w-[60px] h-[60px]" 
                                                loading="lazy" />
                                            </div>
                                        )}
                                        <div>
                                            <span className="box-border overflow-hidden bg-none opacity-[1] border-0 m-0 p-0 absolute inset-0">
                                                <img
                                                    src={game.image}
                                                    alt={game.name}
                                                    className="absolute inset-0 box-border p-0 border-none m-auto w-0 h-0 min-w-full min-h-full max-w-full max-h-full"
                                                    loading="lazy"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-1 mt-2">
                            <span className="text-[12px] font-[500] leading-4 text-center">
                                {game.name}
                            </span>
                        </div>
                        <div className="mt-2"></div>
                        <div className="w-full overflow-hidden h-fit">
                            <div className="p-[1px] bg-borderJackpot rounded">
                                <button className="p-0 bg-primaryDefault hover:bg-hoverNewTheme min-h-[35px] cursor-pointer outline-none select-none flex justify-center w-full border-none transition ease-out duration-150 rounded mx-auto" title="Click me">
                                    <div className="mr-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill="url(#:rq5:)" d="M5.333 12.617V3.283l7.334 4.667-7.334 4.667Z"></path>
                                            <defs>
                                                <linearGradient id=":rq5:" x1="8.978" x2="8.978" y1="4.45" y2="9.35" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#D9AD57"></stop>
                                                    <stop offset="0.361" stopColor="#F1E69F"></stop>
                                                    <stop offset="0.674" stopColor="#FAEF9F"></stop>
                                                    <stop offset="1" stopColor="#DCAA52"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="inline text-[14px] md:text-[16px] font-[500] leading-[21px] m-0 liearCustom mt-[5px]">
                                        Main
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
