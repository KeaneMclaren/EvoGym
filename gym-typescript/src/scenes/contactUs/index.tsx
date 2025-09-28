import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from  "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>
                    <span className="text-red-400">JOIN NOW</span> <span>TO GET IN SHAPE</span>
                </HText>
                <p className="my-5">
                    Take the first step toward a stronger, healthier you. Join now and get into shape with expert guidance, world-class facilities, and a community that keeps you motivated every day.
                </p>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/67a676372acdc8c7621ff3f0035ddb52"
                        method = "POST"
                    >
                        <input 
                            className= {inputStyles}
                            type = "text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is a 100 characters."}
                                </p>
                            )}
                            <input 
                            className= {inputStyles}
                            type = "text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid Email Address."}
                                </p>
                            )}
                            <textarea 
                            className= {inputStyles}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max Length is a 2000 characters."}
                                </p>
                            )}
                            <button
                                type = "submit"
                                className="mt-5 rounded-lg bg-yellow-400 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                    </form>    

                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2,duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="md:before:content-evolvetext w-full before-absolutee before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img 
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs