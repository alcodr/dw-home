import Marquee from "react-fast-marquee";

import PROMO_1 from '@/assets/promos/promo_1.webp'
import PROMO_2 from '@/assets/promos/promo_2.webp'
import PROMO_3 from '@/assets/promos/promo_3.webp'
import PROMO_4 from '@/assets/promos/promo_4.webp'
import PROMO_5 from '@/assets/promos/promo_5.webp'

import './MarqueePromoBanner.css'

const MarqueePromoBanner = () => {

    const promos: any = [
        {
            type: 'promo',
            title: 'Gratis Ongkir untuk kamu!',
            date: 'Apr 8 , 2022',
            image: PROMO_3
        },
        {
            type: 'promo',
            title: 'Langit senja, Diskon gak kira-kira!',
            date: 'Apr 8 , 2022',
            image: PROMO_4
        },
        {
            type: 'promo',
            title: 'Rayakan Kebersamaan, Hematnya bikin nyaman!',
            date: 'Apr 8 , 2022',
            image: PROMO_5
        },
        {
            type: 'promo',
            title: 'BANYAK LEBIH HEMAT!',
            date: 'Apr 8 , 2022',
            image: PROMO_2
        },
        {
            type: 'promo',
            title: 'PROMO DAILY TREATS!',
            date: 'Apr 8 , 2022',
            image: PROMO_1
        },
    ]

    return (
        <div>
            <Marquee autoFill speed={50}>
                {promos.map((promo: any, i: number) => {
                    return (
                        <div key={'promo_' + i} className="mx-6 relative w-[380px] h-[500px] inter rounded-md">
                            <img src={promo?.image} className="object-cover object-center h-full w-full rounded-md" />
                            <div className="banner-shadow absolute top-0 h-full w-full rounded-md">
                                <div className="absolute top-0 left-0 mt-5 ml-5 py-1 px-4 rounded-full text-white bg-[#1c1c1c] capitalize">{promo.type}</div>
                                <div className="absolute bottom-0 flex flex-col p-5 text-white" >
                                    <div className="text-xl leading-[1.2em] mb-1 font-semibold">{promo?.title}</div>
                                    <div>By DW Coffee House • {promo?.date}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default MarqueePromoBanner