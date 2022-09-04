import {ContactOptions} from "./ContactData";
import {ContactOptionModel} from "../../models/ContactOptionModel";
import Section from "../Section";
import {useForm} from "react-hook-form";
import FormService, {FormValues} from "./FormService";
import {useState} from "react";

export default function Contact(): JSX.Element {
    type FormData = {
        name: string;
        subject: string;
        email: string;
        message: string;
    };
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<FormData>();

    function handleResponse(msg: string): void {
        setMessage(msg);
    }

    async function handleFormSubmit(data: FormData): Promise<void> {
        setIsLoading(true);
        const service = new FormService();
        const res = await service.sendForm(data as FormValues);
        if (res?.status === 200) {
            handleResponse("Deine Email wurde verschickt! Vielen Dank :)");
            setIsSuccess(true);
        } else {
            handleResponse(
                "Etwas ist schiefgelaufen :( Bitte versuch es später nochmal"
            );
            setIsSuccess(false);
        }
        setIsLoading(false);
    }

    return (
        <Section id={"contact"} title={"Contact"}>
            <div className={"flex flex-row w-full tablet:h-[80vh] h-full flex-wrap justify-center"}>
                <div className={"flex tablet:w-[75vh] w-full h-full justify-center items-center"}>
                    <div className="flex-col h-full flex tablet:w-3/4 w-full justify-center">
                        {ContactOptions.map(
                            (contactOption: ContactOptionModel): JSX.Element => {
                                return (
                                    <div className={"flex-row bg-slate-800 rounded-lg my-3 tablet:mx-8 mx-3 border-white border-2 shadow-md shadow-slate-50/50"}>
                                        <div className={"flex justify-start"}>
                                            <div
                                                className={
                                                    "tablet:w-16 tablet:h-16 w-10 h-8 rounded-full bg-slate-700 flex justify-center items-center mx-5 my-3"
                                                }
                                            >
                                                <i
                                                    className={`${contactOption.icon} tablet:text-3xl text-sm text-white`}
                                                ></i>
                                            </div>
                                            <div
                                                className={
                                                    "flex justify-start items-center tablet:w-1/2 w-full tablet:text-xl text-sm tablet:font-semibold"
                                                }
                                            >
                                                <a href={contactOption.href}>{contactOption.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <div className={"flex w-[5px] h-[5px] tablet:h-full"}>
                    <div className={"sexy_line h-full flex mx-auto tablet:w-[1px] w-0"}/>
                </div>
                <div className={"flex w-[75vh] h-full"}>
                    <form
                        className={"flex justify-center items-center w-full h-full"}
                        onSubmit={handleSubmit((data) => void handleFormSubmit(data))}
                    >
                        <div
                            className={
                                "h-full bg-slate-800 tablet:w-3/4 tablet:h-3/4 rounded-lg shadow-md shadow-slate-50/50 border-2 focus:outline-none focus:border-brand duration-300"
                            }
                        >
                            <div className={"flex-col h-full flex justify-evenly"}>
                                <div
                                    className={
                                        "mx-5 py-3 font-semibold tablet:text-3xl text-xl text-white flex justify-center"
                                    }
                                >
                                    Contact Form
                                </div>
                                <div className={"flex-row justify-center w-full"}>
                                    <div className={"mx-5 font-semibold tablet:text-lg text-sm text-white py-1"}>
                                        Your Name
                                    </div>
                                    <div className={"flex"}>
                                        <input
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Bitte gib deinen Namen an",
                                                },
                                            })}
                                            className={
                                                "w-full mx-5 font-semibold px-3 py-1 bg-slate-600 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300"
                                            }
                                            placeholder={"Max Mustermann"}
                                        />
                                    </div>
                                    <p
                                        className={
                                            "flex justify-center text-sm text-red-600 font-medium"
                                        }
                                    >
                                        {errors.name?.message}
                                    </p>
                                </div>
                                <div className={"flex-row justify-center w-full"}>
                                    <div className={"py-1 mx-5 font-semibold tablet:text-lg text-sm text-white"}>
                                        Your Subject
                                    </div>
                                    <div className={"flex"}>
                                        <input
                                            {...register("subject", {
                                                required: {
                                                    value: true,
                                                    message: "Bitte gib einen Betreff an",
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "Dein Betreff sollte min 3 Zeichen haben",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message:
                                                        "Dein Betreff sollte nicht mehr als 50 Zeichen haben",
                                                },
                                            })}
                                            className={
                                                "w-full mx-5 font-semibold px-3 py-1 mx-5 bg-slate-600 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300"
                                            }
                                        />
                                    </div>
                                    <p
                                        className={
                                            "flex justify-center text-sm text-red-600 font-medium"
                                        }
                                    >
                                        {errors.subject?.message}
                                    </p>
                                </div>
                                <div className={"flex-row justify-center w-full"}>
                                    <div className={"py-1 mx-5 font-semibold tablet:text-lg text-sm text-white"}>
                                        Your Email
                                    </div>
                                    <div className={"flex"}>
                                        <input
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Bitte gib deine Email an",
                                                },
                                                pattern: {
                                                    value:
                                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Bitte gib eine valide Email an",
                                                },
                                            })}
                                            className={
                                                "w-full mx-5 font-semibold px-3 py-1 mx-5 bg-slate-600 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300"
                                            }
                                        />
                                    </div>
                                    <p
                                        className={
                                            "flex justify-center text-sm text-red-600 font-medium"
                                        }
                                    >
                                        {errors.email?.message}
                                    </p>
                                </div>
                                <div className={"flex-row justify-center w-full h-1/5"}>
                                    <div className={"py-1 mx-5 font-semibold tablet:text-lg text-sm text-white"}>
                                        Your message
                                    </div>
                                    <div className={"flex h-full"}>
                    <textarea
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Bitte gib an warum du mich kontaktierst",
                            },
                        })}
                        className={
                            "mx-5 font-semibold px-3 py-1 mx-5 w-full bg-slate-  rounded-lg focus:ring-brand p-1 text-white border-2 focus:outline-none focus:border-brand duration-300 bg-slate-600"
                        }
                    />
                                    </div>
                                    <p
                                        className={
                                            "flex justify-center text-sm text-red-600 font-medium"
                                        }
                                    >
                                        {errors.message?.message}
                                    </p>
                                </div>
                                <div className={"flex justify-center w-full tablet:pt-16 pt-6 pb-2"}>
                                    <button
                                        type="submit"
                                        className={
                                            "btn-sm rounded-xl btn-primary bg-brand duration-500 hover:bg-green-300 tablet:px-8 tablet:py-5 tablet:text-lg font-semibold flex items-center justify-center text-xs tablet:mt-0 mt-6 border-0 hover:-translate-y-2"
                                        }
                                    >
                                        {isLoading ? (
                                            <>
                                                <img src="/loading.svg" className="w-8"/>
                                            </>
                                        ) : (
                                            <>Submit</>
                                        )}
                                    </button>
                                </div>
                                <p
                                    className={`flex justify-center font-semibold text-sm ${
                                        isSuccess ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {message}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}
