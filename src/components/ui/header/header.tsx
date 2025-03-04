import { MoonIcon, PersonIcon, SunIcon, TextAlignLeftIcon } from "@radix-ui/react-icons"

import dwLogo from '@/assets/dw-logo.png'
import { useTheme } from "@/hooks/use-theme"
import { useThemeStore } from "./useThemeStore"

const Header = () => {

    const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
    const theme = useThemeStore((state: any) => state.theme)
    useTheme()

    return (<>
        <div className="py-6 px-6 flex justify-between bg-transparent text-white items-center fixed w-100 left-0 right-0 z-[200]" >
            <div>
                <TextAlignLeftIcon width="24" height="24"></TextAlignLeftIcon>
            </div>
            <img src={dwLogo} width={150} />
            <div className='flex'>
                <div className='mr-4' onClick={() => toggleTheme()}>
                    {theme === 'light' && <SunIcon width="24" height="24"></SunIcon>}
                    {theme !== 'light' && <MoonIcon width="24" height="24"></MoonIcon>}
                </div>
                <div><PersonIcon width="24" height="24"></PersonIcon></div>
            </div>
        </div>
    </>)
}

export default Header