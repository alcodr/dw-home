import { Input } from "@/components/ui/form"

const ContactUsRoute = () => {
    return (
        <section className="py-48 px-12 container-content flex flex-col items-center">
            <div className="text-3xl lg:text-5xl font-semibold mb-10 max-w-[800px]">
                <div className="p-8 text-center font-bold text-3xl">Contact Us</div>

                <div>
                    <label htmlFor="name" className="uppercase">name</label>
                    <input type="text" name="name" />
                </div>
            </div>
        </section>
    )
}

export default ContactUsRoute