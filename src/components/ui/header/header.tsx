import { MoonIcon, PersonIcon, SunIcon, TextAlignLeftIcon } from "@radix-ui/react-icons"

import dwLogo from '@/assets/dw-logo.png'
import { useTheme } from "@/hooks/use-theme"
import { useThemeStore } from "./useThemeStore"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../drawer"
import { Link, useNavigate } from "react-router"

const HeaderContent = () => {
    const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
    const theme = useThemeStore((state: any) => state.theme)
    const isDark = theme === 'dark' ? true : false

    const navigate = useNavigate()

    const goto = (path: string) => {
        if (path === '/app') {
            if (isDark) {
                toggleTheme()
            }
        }
        navigate(path)
    }

    return (<>
        <div className="cursor-pointer">
            <Drawer modal={false}>
                <DrawerTrigger asChild>
                    <TextAlignLeftIcon color={!isDark ? 'black' : 'white'} width="24" height="24"></TextAlignLeftIcon>
                </DrawerTrigger>
                <DrawerContent side='left' className="z-[300]">
                    <DrawerHeader className="border-b border-neutral-300 dark:border-neutral-900 font-semibold py-4 text-[#333333] dark:text-white text-left">
                        Menu
                    </DrawerHeader>
                    <section className="py-8 uppercase">
                        <div className="py-6 border-b border-neutral-300 dark:border-neutral-900 text-[#0d0d0d] dark:text-white"><Link to='/'>Home</Link></div>
                        <div className="py-6 border-b border-neutral-300 dark:border-neutral-900 text-[#0d0d0d] dark:text-white"><Link to='/'>About</Link></div>
                        {/* <div className="py-6 border-b border-neutral-300 dark:border-neutral-900 text-[#0d0d0d] dark:text-white"><Link to='/'>Blog</Link></div> */}
                        <div className="py-6 border-b border-neutral-300 dark:border-neutral-900 text-[#0d0d0d] dark:text-white"><Link to='/faq'>FAQ</Link></div>
                        {/* <div className="py-6 border-b border-neutral-300 dark:border-neutral-900 text-[#0d0d0d] dark:text-white"><Link to='/contact-us'>Contact</Link></div> */}
                        <div className="hidden">Download Our Apps</div>
                    </section>
                </DrawerContent>
            </Drawer>
        </div>
        <Link to='/'>
            <img src={dwLogo} width={150} />
        </Link>
        <div className='flex'>
            <div className='mr-4 cursor-pointer' onClick={() => toggleTheme()}>
                {!isDark && <SunIcon color='black' width="24" height="24"></SunIcon>}
                {isDark && <MoonIcon color='white' width="24" height="24"></MoonIcon>}
            </div>
            <div className="cursor-pointer" onClick={() => { goto('/app') }}><PersonIcon color={!isDark ? 'black' : 'white'} width="24" height="24"></PersonIcon></div>

        </div>
    </>)
}

const Header = () => {

    useTheme()

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom+=3000",
            toggleClass: {
                targets: '.header',
                className: 'border-b'
            }
        })

        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom+=3000",
            toggleClass: {
                targets: '.header',
                className: 'bg-[#f5f5f5]'
            }
        })

        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom+=3000",
            toggleClass: {
                targets: '.header',
                className: 'dark:bg-[#0d0d0d]'
            }
        })


    })

    return (<>
        <div className={`header py-6 px-6 flex justify-between lg:hover:bg-[#f5f5f5] lg:dark:hover:bg-[#0d0d0d] text-white items-center fixed w-100 left-0 right-0 z-[200] border-neutral-300 dark:border-neutral-900`} >
            <HeaderContent></HeaderContent>
        </div>
    </>)
}

const HeaderStatic = () => {

    useTheme()

    return (<>
        <div className={`header py-6 px-6 mb-6 flex justify-between bg-[#f5f5f5] dark:bg-[#0d0d0d] lg:hover:bg-[#f5f5f5] lg:dark:hover:bg-[#0d0d0d] text-white items-center fixed w-100 left-0 right-0 z-[200] border-b border-neutral-300 dark:border-neutral-900`} >
            <HeaderContent></HeaderContent>
        </div>
    </>)
}

export { Header, HeaderStatic }