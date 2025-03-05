import Marquee from "react-fast-marquee";

const MarqueePromoLine = () => {
    return (
        <div className="fixed bottom-0 z-50">
            <Marquee autoFill className="bg-black text-white">
                <div className="mx-8">
                    Get 40% Off on <a className="text-[#555555] font-bold">DW Coffee Apps!</a> Use the code <span className="text-[#08ff00] font-bold">dwcoffee</span> when <a className="">purchasing the product.</a>
                </div>
            </Marquee>
        </div>
    )
}

export default MarqueePromoLine