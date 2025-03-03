
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react'

import homeVideo from '@/assets/home-vid.mp4'
import Footer from '@/components/ui/footer/footer';
import Header from '@/components/ui/header/header';


const HomeRoute = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let panels = gsap.utils.toArray(".panel");
        console.log(panels)

        panels.forEach((panel: any) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                pin: true,
                pinSpacing: false
            });
        });
    })
    return (
        <>
            <ReactLenis root>
                <Header></Header>
                <section className='h-svh bg-zinc-700 relative panel' style={{ 'zIndex': "-100" }}>
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
                <div className='panel' style={{ backgroundColor: "#f5f5f5" }}>
                    <section className='h-svh p-6 text-center'>
                        WELCOME TO<br />
                        DAILY WEEKLY COFFEE HOUSE
                    </section>
                    <section className='h-svh uppercase p-6 text-center'>
                        LOYALTY MEMBERSHIP PLATFORM <br />
                        DW Coffee App is the key to faster orders, better savings, and ultimate coffee convenience.
                    </section>
                    <section className='h-svh uppercase p-6 text-center'>
                        our promo only membership <br />
                        Download our app and get benefits promo
                    </section>
                    <Footer></Footer>
                </div>
            </ReactLenis>
        </>)
}

export default HomeRoute