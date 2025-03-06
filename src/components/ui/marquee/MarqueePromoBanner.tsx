import { title } from "process";
import Marquee from "react-fast-marquee";

const MarqueePromoBanner = () => {

    const promos: any = [
        {
            type: 'promo',
            title: 'Gratis Ongkir untuk kamu!',
            date: 'Apr 8 , 2022'
        },
        {
            type: 'promo',
            title: 'Langit senja, Diskon gak kira-kira!',
            date: 'Apr 8 , 2022'
        },
        {
            type: 'promo',
            title: 'Rayakan Kebersamaan, Hematnya bikin nyaman!',
            date: 'Apr 8 , 2022'
        },
        {
            type: 'promo',
            title: 'BANYAK LEBIH HEMAT!',
            date: 'Apr 8 , 2022'
        },
        {
            type: 'promo',
            title: 'PROMO DAILY TREATS!',
            date: 'Apr 8 , 2022'
        },
    ]

    return (
        <div>
            <Marquee autoFill speed={50}>
                {promos.map((promo: any, i: number) => {
                    return (
                        <div key={'promo_' + i} className="mx-6 relative w-[380px] h-[500px] bg-neutral-900 flex flex-col justify-end content-end inter rounded-md">
                            <div className="absolute top-0 left-0 mt-5 ml-5 py-1 px-4 rounded-full text-white bg-[#1c1c1c] capitalize">{promo.type}</div>
                            <div className="flex flex-col p-5 text-white relative" >
                                <div className="text-xl leading-[1.2em] mb-1 font-semibold">{promo?.title}</div>
                                <div>By DW Coffee House • {promo?.date}</div>
                            </div>
                        </div>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default MarqueePromoBanner