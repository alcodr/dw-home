
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react'

import homeVideo from '@/assets/home-vid.mp4'
import downloadApple from '@/assets/dl_apple.png'
import downloadGoogle from '@/assets/dl_google.png'

import Footer from '@/components/ui/footer/footer';
import Header from '@/components/ui/header/header';
import MarqueePromoLine from "@/components/ui/marquee/Marquee";
import MarqueePromoBanner from "@/components/ui/marquee/MarqueePromoBanner";
import MarqueeBeverages from "@/components/ui/marquee/MarqueeBeverages";

const HomeRoute = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let panels = gsap.utils.toArray(".panel");
        console.log(panels)

        panels.forEach((panel: any) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => "top top", // if it's shorter than the viewport, we prefer to pin it at the top
                pin: true,
                pinSpacing: false
            });
        });
    })

    const shadowStyle = {
        'background': 'linear-gradient(180deg, rgba(227, 227, 227, 0) 0%, rgb(13, 13, 13) 100%)',
    }

    const beverageShadowStyle = {
        'mask': 'radial-gradient(50% 50% at 50% 50%, rgb(13, 13, 13) 0%, rgba(0, 0, 0, 0) 100%)'
    }

    const lenisOptions = {
        wheelMultiplier: 0.5,
        touchMultiplier: 0.5
    }

    return (
        <>
            <ReactLenis root options={lenisOptions}>
                <MarqueePromoLine></MarqueePromoLine>
                <Header></Header>
                <div className={`absolute top-0 bottom-0 left-0 right-0`} style={shadowStyle}>
                </div>
                <section className='h-svh bg-emerald-950 relative panel' style={{ 'zIndex': "-100" }}>
                    <video
                        loop
                        preload="auto"
                        muted
                        playsInline
                        autoPlay
                        style={{
                            cursor: "auto",
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            display: "block",
                            objectFit: "cover",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            objectPosition: "50% 50%"
                        }}
                    >
                        <source src={homeVideo} type="video/mp4" />
                    </video>
                </section>
                <div className='bg-[#f5f5f5] dark:bg-[#0d0d0d]'>
                    <section className='h-svh px-6 pt-16 text-center'>
                        <div className="text-xs mb-4">WELCOME TO</div>
                        <div className="text-4xl font-bold">DAILY WEEKLY COFFEE HOUSE</div>
                    </section>
                    <section className='h-svh uppercase p-6 text-center'>
                        <div className="text-4xl font-bold mb-4">LOYALTY MEMBERSHIP PLATFORM</div>
                        <div className="text-xs">DW Coffee App is the key to faster orders, better savings, and ultimate coffee convenience.</div>
                    </section>
                    <section className='uppercase p-6 py-16'>
                        <div className="p-6 mb-6 text-center">
                            <div className="text-[40px] font-bold mb-4">our promo only membership</div>
                            <div>Download our app and get benefits promo</div>
                        </div>
                        <MarqueePromoBanner></MarqueePromoBanner>
                    </section>
                    <section className='uppercase py-16 px-6 text-center relative' style={beverageShadowStyle}>
                        <MarqueeBeverages></MarqueeBeverages>
                        <div className="text-4xl font-extrabold">Download DW <br /> Coffee Apps</div>
                        <div className="flex flex-col justify-center items-center gap-[20px] my-8">
                            <img src={downloadApple} className="cursor-pointer" />
                            <img src={downloadGoogle} className="cursor-pointer" />
                        </div>
                        <div className="text-xs">DW Coffee App is the key to faster orders, better savings, and <br /> ultimate coffee convenience.</div>
                    </section>
                    <Footer></Footer>
                </div>
            </ReactLenis>
        </>)
}

export default HomeRoute