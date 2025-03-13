import faqs from "@/constants/faqConst"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import * as Accordion from '@radix-ui/react-accordion';
import React, { useRef } from "react";
import classNames from "classnames";
import '@/assets/style/faq-style.css'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

const faqRoute = () => {

    const appsLength = faqs.dw_apps.length
    const usageLength = faqs.dw_usage.length + appsLength
    const promoLength = faqs.dw_promo.length + usageLength
    const careLength = faqs.dw_care.length + promoLength

    gsap.registerPlugin(ScrollToPlugin)

    const container = useRef<any>();
    const { contextSafe } = useGSAP({ scope: container }); // we can pass in a config object as the 1st parameter to make scoping simple
    const faqScroll = contextSafe((id: string) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 100, autoKill: true }, ease: "power2.inOut" });
    });

    return (
        <section className="py-48 px-8" >
            <div className="p-8 text-center font-bold text-3xl">FAQ</div>
            <section className="faqs-container flex justify-center gap-[50px]">
                <div className="hidden lg:block relative">
                    <div className="lg:sticky top-32 flex flex-col justify-between gap-[20px] text-[12px] border-l-2 dark:border-white border-[#d0d0d0] pl-4" ref={container}>
                        <div className="cursor-pointer hover:font-semibold" onClick={() => { faqScroll('DW-APPS') }}>Aplikasi DW Coffee House</div>
                        <div className="cursor-pointer hover:font-semibold" onClick={() => { faqScroll('DW-USAGE') }}>Cara Penggunaan Aplikasi DW Coffeee</div>
                        <div className="cursor-pointer hover:font-semibold" onClick={() => { faqScroll('DW-PROMO') }}>Promotion & Point Rewards Membership</div>
                        <div className="cursor-pointer hover:font-semibold" onClick={() => { faqScroll('DW-CARE') }}>Customer Care</div>
                    </div>
                </div>
                <section className="grow-0" id="DW-APPS">
                    <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6">
                        Aplikasi DW Coffee House
                    </div>
                    <Accordion.Root
                        className="AccordionRoot"
                        type="single"
                        collapsible
                    >
                        {faqs.dw_apps.map((dw_apps, i) => {
                            return (<Accordion.Item className="AccordionItem" value={`dw_faq_${i}`} key={`dw_faq_${i}`}>
                                <AccordionTrigger className="px-4 pt-4 text-[16px]">{dw_apps.title}</AccordionTrigger>
                                <AccordionContent className="px-4 mt-4">
                                    <div className="text-[13px]" dangerouslySetInnerHTML={{ __html: dw_apps.body }}></div>
                                </AccordionContent>
                            </Accordion.Item>)
                        })}
                    </Accordion.Root>

                    <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6 mt-6" id="DW-USAGE">
                        Cara Penggunaan Aplikasi DW Coffee
                    </div>
                    <Accordion.Root
                        className="AccordionRoot"
                        type="single"
                        collapsible
                    >
                        {faqs.dw_usage.map((dw_usage, i) => {
                            return (<Accordion.Item className="AccordionItem" value={`dw_faq_${i + usageLength}`} key={`dw_faq_${i + usageLength}`}>
                                <AccordionTrigger className="px-4 pt-4 text-[16px]">{dw_usage.title}</AccordionTrigger>
                                <AccordionContent className="px-4 mt-4">
                                    <div className="text-[13px]" dangerouslySetInnerHTML={{ __html: dw_usage.body }}></div>
                                </AccordionContent>
                            </Accordion.Item>)
                        })}
                    </Accordion.Root>

                    <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6 mt-6" id="DW-PROMO">
                        Promotion & Point Rewards Membership
                    </div>
                    <Accordion.Root
                        className="AccordionRoot"
                        type="single"
                        collapsible
                    >
                        {faqs.dw_promo.map((dw_promo, i) => {
                            return (<Accordion.Item className="AccordionItem" value={`dw_faq_${i + promoLength}`} key={`dw_faq_${i + promoLength}`}>
                                <AccordionTrigger className="px-4 pt-4 text-[16px]">{dw_promo.title}</AccordionTrigger>
                                <AccordionContent className="px-4 mt-4">
                                    <div className="text-[13px]" dangerouslySetInnerHTML={{ __html: dw_promo.body }}></div>
                                </AccordionContent>
                            </Accordion.Item>)
                        })}
                    </Accordion.Root>

                    <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6 mt-6" id="DW-CARE">
                        Customer Care
                    </div>
                    <Accordion.Root
                        className="AccordionRoot"
                        type="single"
                        collapsible
                    >
                        {faqs.dw_care.map((dw_care, i) => {
                            return (<Accordion.Item className="AccordionItem" value={`dw_faq_${i + careLength}`} key={`dw_faq_${i + careLength}`}>
                                <AccordionTrigger className="px-4 pt-4 text-[16px]">{dw_care.title}</AccordionTrigger>
                                <AccordionContent className="px-4 mt-4">
                                    <div className="text-[13px]" dangerouslySetInnerHTML={{ __html: dw_care.body }}></div>
                                </AccordionContent>
                            </Accordion.Item>)
                        })}
                    </Accordion.Root>

                </section>
            </section>
        </section>)
}

const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => (
        <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger
                className={classNames("AccordionTrigger", className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
        </Accordion.Header>
    ),
);

const AccordionContent = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => (
        <Accordion.Content
            className={classNames("AccordionContent", className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    ),
);

export default faqRoute