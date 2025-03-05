import Marquee from "react-fast-marquee";
import beverages from '@/assets/beverages.png'

const MarqueeBeverages = () => {
    return (
        <div className="absolute z-[-10] top-0 left-0">
            <Marquee autoFill className="bg-black text-white">
                <img src={beverages} />
            </Marquee>
        </div>
    )
}

export default MarqueeBeverages