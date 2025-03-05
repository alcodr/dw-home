import Marquee from "react-fast-marquee";
import beverages from '@/assets/beverages.png'

const MarqueeBeverages = () => {
    return (
        <div className="absolute z-[-10] top-0 left-0">
            <Marquee autoFill speed={20} className="dark:bg-[#0d0d0d] bg-[#f5f5f5]  text-[#333333] dark:text-[#DEDEDE]">
                <img src={beverages} />
            </Marquee>
        </div>
    )
}

export default MarqueeBeverages