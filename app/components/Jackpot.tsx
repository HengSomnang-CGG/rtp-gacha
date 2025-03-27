import { useCallback, useEffect, useRef, useState } from "react"

const START_VALUE = 0
const START_TIME = new Date("2025-03-24T00:00:00Z").getTime()
const BASE_RATE_PER_MS = 15
const FLUCTUATION_RANGE = 0.0000001 // Up to ±30% fluctuation

export default function Jackport() {
    const [jackpot, setJackpot] = useState(START_VALUE)
    const frameRef = useRef<number>()

    const updateJackpot = useCallback(() => {
        const now = Date.now()
        const elapsed = now - START_TIME

        // Random fluctuation factor between -FLUCTUATION_RANGE and +FLUCTUATION_RANGE
        const fluctuation = (Math.random() * 2 - 1) * FLUCTUATION_RANGE

        const rateWithFluctuation = BASE_RATE_PER_MS * (1 + fluctuation)
        const current = Math.floor(START_VALUE + elapsed * rateWithFluctuation)

        setJackpot(current)
        frameRef.current = requestAnimationFrame(updateJackpot)
    }, [])

    useEffect(() => {
        frameRef.current = requestAnimationFrame(updateJackpot)
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [updateJackpot])

    const formattedJackpot = jackpot.toLocaleString("en-US")

    return (
        <div className="pt-1 pb-1 xl:mx-56">
            <section className="px-3 w-full mx-auto">
                <div className="flex flex-col items-center">
                    <div className="relative w-full pb-[18.66%]">
                        <div className="absolute inset-0">
                            <div className="flex items-center w-full h-full">
                                {/* Background Image */}
                                <span className="absolute inset-0 overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dmpwyrbid/image/upload/v1742882094/jackpot-bg-1_zxgrlw.webp"
                                        alt="jackpot"
                                        className="absolute inset-0 w-full h-full object-contain"
                                        loading="lazy"
                                        decoding="async"
                                        width={800}
                                        height={500}
                                        srcSet="
                                            https://res.cloudinary.com/dmpwyrbid/image/upload/c_pad,w_800/v1742882094/jackpot-bg-1_zxgrlw.webp 800w,
                                            https://res.cloudinary.com/dmpwyrbid/image/upload/v1742882094/jackpot-bg-1_zxgrlw.webp 1600w"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </span>

                                {/* Jackpot Number */}
                                <div className="flex justify-center items-center w-full h-full ml-[20%] mt-[2%] relative z-10">
                                    <span className="xs:text-[20px] md:text-[35px] lg:text-[50px] xl:text-[40px] 2xl:text-[50px] font-extrabold tracking-[0.12em]">
                                        <span className="liearCustom inline leading-[1.2]">
                                            {formattedJackpot}
                                        </span>
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
