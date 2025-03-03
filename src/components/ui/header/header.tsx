import { PersonIcon, SunIcon, TextAlignLeftIcon } from "@radix-ui/react-icons"

import dwLogo from '@/assets/dw-logo.png'

const Header = () => {
    return (<>
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
    </>)
}

export default Header