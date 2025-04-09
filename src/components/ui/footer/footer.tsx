import dwLogo from '@/assets/dw-logo.png'
import { footerNavigation, footerCopy, footerCopyright } from '@/constants/homeConst';
import { Link } from 'react-router';

const Footer = () => {

    return <>
        <section className='p-12 bg-[#0d0d0d] relative bottom-0 left-0 right-0 text-white'>
            <div>
                <div className='flex xl:flex-nowrap xl:flex-row xl:items-end items-start flex-col flex-wrap justify-between gap-[50px]'>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='flex flex-col gap-[24px]'>
                            <img src={dwLogo} width={300} />
                            <div>Social Media Icons</div>
                        </div>
                        <p className='lg:w-3/4 text-sm font-semibold'>{footerCopy}</p>
                    </div>
                    <div className='flex flex-col justify-between h-min gap-[30px] lg:flex-row md:items-start md:gap-unset xl:gap-[150px] w-full text-sm'>
                        <div className='flex flex-col justify-center flex-none gap-[20px]'>
                            <h6 className='font-semibold'>Page</h6>
                            {footerNavigation.page.map((page, i) => {
                                return (
                                    <div key={'footpage_' + i} className='cursor-pointer font-semibold text-zinc-500'>
                                        <Link to={page.path}>{page.name}</Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex flex-col justify-center flex-none gap-[20px]'>
                            <h6 className='font-semibold'>Company</h6>
                            {footerNavigation.company.map((company, i) => {
                                return (
                                    <div key={'footcomp_' + i} className='cursor-pointer font-semibold text-zinc-500'>
                                        <Link to={company.path}>{company.name}</Link>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='flex flex-col justify-center flex-none gap-[20px]'>
                            <h6 className='font-semibold'>Legal</h6>
                            {footerNavigation.legal.map((legal, i) => {
                                return (
                                    <div key={'footlegal_' + i} className='cursor-pointer font-semibold text-zinc-500'>
                                        <Link to={legal.path}>{legal.name}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-16 xl:my-5 xl:border-none border-b border-black opacity-[.05]'></div>
            <section className='flex flex-col items-start md:flex-row md:justify-between md:items-center'>
                {/* <div className='order-1 md:order-2 mb-6 md:mb-0'>Payment List Icons</div> */}
                <div className='text-[13px] opacity-50 order-2 md:order-1'>
                    {footerCopyright}
                </div>
            </section>
        </section>
    </>
}

export default Footer