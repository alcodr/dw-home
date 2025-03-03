import { TextAlignLeftIcon, PersonIcon, SunIcon } from '@radix-ui/react-icons';
import homeVideo from '@/assets/home-vid.mp4'
import dwLogo from '@/assets/dw-logo.png'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeRoute = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let panels = gsap.utils.toArray(".panel");
        console.log(panels)
        // let tops = panels.map((panel:any) => ScrollTrigger.create({trigger: panel, start: "top top"}));
        // console.log(tops)

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
            {/* Header Component  */}
            <div className="py-8 px-6 flex justify-between bg-transparent text-white items-center fixed w-100 left-0 right-0">
                <div>
                    <TextAlignLeftIcon width="24" height="24"></TextAlignLeftIcon>
                </div>
                <img src={dwLogo} width={150} />
                <div className='flex'>
                    <div className='mr-4'><SunIcon width="24" height="24"></SunIcon></div>
                    <div><PersonIcon width="24" height="24"></PersonIcon></div>
                </div>
            </div>
            {/* Header Component  */}

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
                <section className='p-8'>
                    <div>
                        <div style={{ width: 300, height: 56 }}>Logo</div>
                        <div>Social Media Icons</div>
                        <p>DW Coffee House offers a cozy and inviting space for everyone to visit. We feature an air-conditioned indoor area to ensure maximum comfort for all our guests, whether for studying or working, and a child-friendly outdoor area. Our facilities include free Wi-Fi, complimentary printing and scanning services to support work activities, power outlets, clean restrooms, high chairs, and a captivating barista attraction showcasing the art of coffee brewing.</p>
                    </div>
                    <div>
                        Navigation
                    </div>
                    <div className='mb-16 border-b border-black opacity-[.05]'></div>
                    <div>Payment List Icons</div>
                    <div className='text-xs opacity-50'>
                        © 2024 Daily weekly Coffee House. All rights reserved.
                    </div>
                </section>
            </div>
        </>)
}

export default HomeRoute