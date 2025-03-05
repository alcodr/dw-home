import { MoonIcon, PersonIcon, SunIcon, TextAlignLeftIcon } from "@radix-ui/react-icons"

import dwLogo from '@/assets/dw-logo.png'
import { useTheme } from "@/hooks/use-theme"
import { useThemeStore } from "./useThemeStore"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Header = () => {

    const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
    const theme = useThemeStore((state: any) => state.theme)
    const isDark = theme === 'dark' ? true : false
    useTheme()

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const classes = ["border-b-4", "border-indigo-500"];

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom",
            toggleClass: {
                targets: '.header',
                className: 'border-b'
            }
        })

        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom",
            toggleClass: {
                targets: '.header',
                className: 'bg-[#f5f5f5]'
            }
        })

        ScrollTrigger.create({
            trigger: '.container-content',
            start: "top",
            end: "bottom",
            toggleClass: {
                targets: '.header',
                className: 'dark:bg-[#0d0d0d]'
            }
        })


    })

    return (<>
        <div className="header py-6 px-6 flex justify-between lg:hover:bg-[#f5f5f5] lg:dark:hover:bg-[#0d0d0d] text-white items-center fixed w-100 left-0 right-0 z-[200]" >
            <div className="cursor-pointer">
                <TextAlignLeftIcon color={!isDark ? 'black' : 'white'} width="24" height="24"></TextAlignLeftIcon>
            </div>
            <img src={dwLogo} width={150} />
            <div className='flex'>
                <div className='mr-4 cursor-pointer' onClick={() => toggleTheme()}>
                    {!isDark && <SunIcon color='black' width="24" height="24"></SunIcon>}
                    {isDark && <MoonIcon color='white' width="24" height="24"></MoonIcon>}
                </div>
                <div className="cursor-pointer"><PersonIcon color={!isDark ? 'black' : 'white'} width="24" height="24"></PersonIcon></div>
            </div>
        </div>
    </>)
}

export default Header