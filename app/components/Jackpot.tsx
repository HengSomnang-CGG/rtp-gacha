import { useCallback, useEffect, useRef, useState } from "react"

const START_VALUE = 0 // The jackpot value when the count started
const START_TIME = new Date("2025-03-24T00:00:00Z").getTime() // Adjust as needed
const RATE_PER_MS = 51.90634 // Increase rate (adjust to your preference)

export default function Jackport() {
    const [jackpot, setJackpot] = useState(START_VALUE)
    const frameRef = useRef<number>()

    const updateJackpot = useCallback(() => {
        const now = Date.now()
        const timeElapsed = now - START_TIME
        const currentJackpot = Math.floor(START_VALUE + timeElapsed * RATE_PER_MS)
        setJackpot(currentJackpot)
        frameRef.current = requestAnimationFrame(updateJackpot)
    }, [])

    useEffect(() => {
        frameRef.current = requestAnimationFrame(updateJackpot)
        return () => cancelAnimationFrame(frameRef.current!)
    }, [updateJackpot])

    const formattedJackpot = jackpot.toLocaleString().replace(/,/g, ',')

    return (
        <div className="pt-1 pb-1 xl:mx-56">
            <section className="px-3 w-full my-0 mx-auto">
                <div className="flex flex-col items-center">
                    <div className=" relative w-full pb-[18.660287081339714%]">
                        <div className="absolute top-0 right-0 bottom-0 left-0">
                            <div className="flex items-center w-full h-full">
                                <span className="box-border overflow-hidden bg-none opacity-[1] absolute border-0 m-0 p-0 top-0 left-0 bottom-0 right-0">
                                    <img
                                        src="https://res.cloudinary.com/dmpwyrbid/image/upload/v1742882094/jackpot-bg-1_zxgrlw.webp"
                                        alt="jackpot"
                                        className="absolute inset-0 w-full h-full object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                        decoding="auto"
                                        width={800}
                                        height={500}
                                        srcSet="
                                            https://res.cloudinary.com/dmpwyrbid/image/upload/c_pad,w_800/v1742882094/jackpot-bg-1_zxgrlw.webp 800w,
                                            https://res.cloudinary.com/dmpwyrbid/image/upload/v1742882094/jackpot-bg-1_zxgrlw.webp 1600w
  "
                                    />
                                </span>
                                <div className="flex relative overflow-hidden z-0 justify-center items-center w-full h-full ml-[20%] mt-[2%] ">
                                    <span className="xs:text-[21px] md:text-[45px] lg:text-[50px] xl:text-[70px] h-6 md:h-12 lg:h-16 xl:h-20 leading-[1.2] font-[800] items-center z-[1] tracking-[0.12em]">
                                        <div>
                                            <span className="liearCustom inline leading-[1.2] m-0 font-[800]">
                                                {formattedJackpot}
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
