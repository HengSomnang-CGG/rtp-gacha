import Kontak from "./Kontak";
import Pembayaran from "./Pembayaran";
import ServiceTransation from "./ServiceTransation";
import StepTransaction from "./StepTransation";

export default function Transaction() {
    return (
        <div className=" relative bg-inkDark py-8">
            <div className=" absolute opacity-[0.2] inset-0 pointer-events-none" style={{backgroundImage: "url(/images/service-contact-bg.webp)"}}></div>
            <section className="mx-3 lg:container lg:mx-auto">
               <StepTransaction />
               <div className="mt-[20px]"></div>
               <ServiceTransation />
               <div className="mt-[20px]"></div>
               <Pembayaran />
               <div className="mt-[20px]"></div>
               <Kontak />
            </section>
        </div>
    )
}

