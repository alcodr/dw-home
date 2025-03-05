import { MoonIcon, PersonIcon, SunIcon, TextAlignLeftIcon } from "@radix-ui/react-icons"

import dwLogo from '@/assets/dw-logo.png'
import { useTheme } from "@/hooks/use-theme"
import { useThemeStore } from "./useThemeStore"

const Header = () => {

    const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
    const theme = useThemeStore((state: any) => state.theme)
    const isDark = theme === 'dark' ? true : false
    useTheme()

    return (<>
        <div className="py-6 px-6 flex justify-between bg-transparent hover:bg-[#f5f5f5] dark:hover:bg-[#0d0d0d] text-white items-center fixed w-100 left-0 right-0 z-[200]" >
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