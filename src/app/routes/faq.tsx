import faqs from "@/constants/faqConst"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import * as Accordion from '@radix-ui/react-accordion';
import React from "react";
import classNames from "classnames";
import "./faq-style.css"

// import { Accordion } from "@radix-ui/react-accordion";

const faqRoute = () => {

    // const Accordion = AccordionPrimitive.Root;
    // const AccordionItem = AccordionPrimitive.AccordionItem;
    // const AccordionTrigger = AccordionPrimitive.Trigger;
    // const AccordionContent = AccordionPrimitive.Content;

    return (<section className="py-48 px-8">
        <div className="p-8 text-center font-bold text-3xl">FAQ</div>
        <section className="faqs-container flex">
            <div className="hidden lg:block">
                h
            </div>
            <section>
                <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6">
                    Aplikasi DW Coffee House
                </div>
                <Accordion.Root
                    className="AccordionRoot"
                    type="single"
                    defaultValue="item-1"
                    collapsible
                >
                    <Accordion.Item className="AccordionItem" value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-2">
                        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's unstyled by default, giving you freedom over the look and
                            feel.
                        </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-3">
                        <AccordionTrigger>Can it be animated?</AccordionTrigger>
                        <AccordionContent className="AccordionContent">
                            <div className="AccordionContentText">
                                Yes! You can animate the Accordion with CSS or JavaScript.
                            </div>
                        </AccordionContent>
                    </Accordion.Item>
                </Accordion.Root>
                {faqs.dw_apps.map((dw_apps, i) => {
                    return (
                        <div key={`dw_apps${i}`}>
                            <div className="py-6 px-6 flex justify-between items-center">
                                <div className="flex-initial">{dw_apps.title}</div>
                                <div className="flex-none pl-4">
                                    <ChevronDownIcon></ChevronDownIcon>
                                </div>
                            </div>
                            <div className={`px-6 text-[13px] hidden`} dangerouslySetInnerHTML={{ __html: dw_apps.body }}></div>
                        </div>
                    )
                })}
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