import faqs from "@/constants/faqConst"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"

const faqRoute = () => {
    return (<section className="py-48 px-8">
        <div className="p-8 text-center font-bold text-3xl">FAQ</div>
        <section className="faqs-container flex">
            <div className="hidden ld:block">
                h
            </div>
            <div>
                <div className="faqs-title bg-[#EAEAEA] dark:bg-[#1c1c1c] p-6">
                    Aplikasi DW Coffee House
                </div>
                {faqs.dw_apps.map((dw_apps) => {
                    return (
                        <div>
                            <div className="py-6 px-6 flex justify-between items-center flex-[0_0_auto]">
                                <div>{dw_apps.title}</div>
                                <ChevronDownIcon></ChevronDownIcon>
                            </div>
                            <div className="px-6 text-[13px] hidden" dangerouslySetInnerHTML={{ __html: dw_apps.body }}></div>
                        </div>
                    )
                })}
            </div>
        </section>
    </section>)
}

export default faqRoute