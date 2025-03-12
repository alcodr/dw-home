
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import homeVideo from '@/assets/home-vid.mp4'
import downloadApple from '@/assets/dl_apple.png'
import downloadGoogle from '@/assets/dl_google.png'

import drink_1 from '@/assets/drinks/drink_1.jpg'
import drink_2 from '@/assets/drinks/drink_2.jpg'
import drink_3 from '@/assets/drinks/drink_3.jpg'
import drink_4 from '@/assets/drinks/drink_4.jpg'
import drink_5 from '@/assets/drinks/drink_5.jpg'

import MarqueePromoLine from "@/components/ui/marquee/Marquee";
import MarqueePromoBanner from "@/components/ui/marquee/MarqueePromoBanner";
import MarqueeBeverages from "@/components/ui/marquee/MarqueeBeverages";
import { useThemeStore } from "@/components/ui/header/useThemeStore";
import Carousel from "@/components/ui/carousel/Carousel";


const renderDrinks = () => {
    return (
        <>
            <div className="drink mx-4 h-[50vh] xl:h-[70vh] w-96">
                <img src={drink_1} className="rounded-md object-center object-cover h-full w-100" />
            </div>
            <div className="drink mx-4 h-[50vh] xl:h-[70vh] w-96">
                <img src={drink_2} className="rounded-md object-center object-cover h-full w-100" />
            </div>
            <div className="drink mx-4 h-[50vh] xl:h-[70vh] w-96">
                <img src={drink_3} className="rounded-md object-center object-cover h-full w-100" />
            </div>
            <div className="drink mx-4 h-[50vh] xl:h-[70vh] w-96">
                <img src={drink_4} className="rounded-md object-center object-cover h-full w-100" />
            </div>
            <div className="drink mx-4 h-[50vh] xl:h-[70vh] w-96">
                <img src={drink_5} className="rounded-md object-center object-cover h-full w-100" />
            </div>
        </>
    )
}

const HomeRoute = () => {

    const theme = useThemeStore((state: any) => state.theme)
    const isDark = theme === 'dark' ? true : false

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Pinning Video
        let panels = gsap.utils.toArray(".panel");
        panels.forEach((panel: any) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => "top top",
                pin: true,
                pinSpacing: false
            });
        });

        // Drinks Welcome
        let horizontalSections = gsap.utils.toArray(".drinks-container");
        horizontalSections.forEach((container: any) => {
            let sections = container.querySelectorAll(".drink");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: false,
                    scrub: 1,
                    end: "+=8000",
                }
            });
        })
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
            <MarqueePromoLine></MarqueePromoLine>
            <div className={`absolute top-0 bottom-0 left-0 right-0`} style={isDark ? shadowStyle : {}}>
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
            <section className="container-content">
                <div className='bg-[#f5f5f5] dark:bg-[#0d0d0d] overflow-hidden'>
                    <section className='pt-16 text-center mb-8'>
                        <div className="px-6 mb-[50px]">
                            <div className="text-xs mb-4">WELCOME TO</div>
                            <div className="text-4xl font-bold">DAILY WEEKLY COFFEE HOUSE</div>
                        </div>
                        <div className="drinks-container flex overflow-hidden w-[500%]">
                            {renderDrinks()}
                        </div>
                    </section>
                    <section className='p-4 text-center'>
                        <div className="uppercase py-16">
                            <div className="text-3xl font-bold mb-4">LOYALTY MEMBERSHIP PLATFORM</div>
                            <div className="text-xs">DW Coffee App is the key to faster orders, better savings, and ultimate coffee convenience.</div>
                        </div>
                        {/* <div className="flex justify-center">
                            <div>
                                <img src={mock_phone} width={276} />
                            </div>
                        </div> */}

                        <Carousel></Carousel>

                    </section>
                    <section className='py-16'>
                        <div className="uppercase p-6 mb-6 text-center">
                            <div className="text-4xl font-bold mb-4">our promo only membership</div>
                            <div>Download our app and get benefits promo</div>
                        </div>
                        <MarqueePromoBanner></MarqueePromoBanner>
                    </section>
                    <section className='uppercase py-16 text-center relative' style={beverageShadowStyle}>
                        <MarqueeBeverages></MarqueeBeverages>
                        <div className="px-6 uppercase">
                            <div className="text-4xl font-extrabold">Download DW <br /> Coffee Apps</div>
                            <div className="flex flex-col justify-center items-center gap-[20px] my-8">
                                <img src={downloadApple} className="cursor-pointer" />
                                <img src={downloadGoogle} className="cursor-pointer" />
                            </div>
                            <div className="text-xs">DW Coffee App is the key to faster orders, better savings, and <br /> ultimate coffee convenience.</div>
                        </div>
                    </section >
                </div >
            </section>
        </>)
}

export default HomeRoute