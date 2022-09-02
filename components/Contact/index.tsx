import { ContactOptions } from "./ContactData";
import { ContactOptionModel } from "../../models/ContactOptionModel";
import Section from "../Section";
import { useForm } from "react-hook-form";
import FormService, { FormValues } from "./FormService";
import { useState } from "react";

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
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  function handleResponse(msg: string): void {
    setMessage(msg);
  }

  async function handleFormSubmit(data: FormData): Promise<void> {
    setIsLoading(true);
    const service = new FormService();
    const res = await service.sendForm(data as FormValues);
    await new Promise((r) => setTimeout(r, 2000));
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
      <div className="py-5 bg-slate-600 ">
        <div className={"grid grid-cols-2 h-[100vh]"}>
          <div className="flex-col flex justify-center border-r-2">
            {ContactOptions.map(
              (contactOption: ContactOptionModel): JSX.Element => {
                return (
                  <div className={"flex-row bg-slate-800 rounded-lg my-3 mx-8"}>
                    <div className={"flex justify-start"}>
                      <div
                        className={
                          "w-16 h-16 rounded-full bg-slate-700 flex justify-center items-center mx-5 my-3"
                        }
                      >
                        <i
                          className={`${contactOption.icon} text-3xl text-white`}
                        ></i>
                      </div>
                      <div
                        className={
                          "flex justify-start items-center w-1/2 text-xl font-semibold"
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
          <form
            className={"h-full w-full flex justify-center items-center"}
            onSubmit={handleSubmit((data) => void handleFormSubmit(data))}
          >
            <div
              className={
                "h-full bg-slate-800 w-3/4 h-3/4 rounded-lg shadow-xl shadow-slate-50/50 border-2 focus:outline-none focus:border-brand duration-300"
              }
            >
              <div className={"flex-col h-full flex justify-evenly"}>
                <div
                  className={
                    "mx-5 font-semibold text-3xl text-white flex justify-center"
                  }
                >
                  Contact Form
                </div>
                <div className={"flex-row justify-center w-full"}>
                  <div className={"mx-5 font-semibold text-lg text-white py-1"}>
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
                  <div className={"py-1 mx-5 font-semibold text-lg text-white"}>
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
                  <div className={"py-1 mx-5 font-semibold text-lg text-white"}>
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
                  <div className={"py-1 mx-5 font-semibold text-lg text-white"}>
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
                        "mx-5 font-semibold px-3 py-1 mx-5 w-full bg-slate-600 rounded-lg focus:ring-brand p-1 text-white border-2 focus:outline-none focus:border-brand duration-300"
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
                <div className={"flex justify-center w-full pt-12"}>
                  <button
                    type="submit"
                    className={
                      "btn btn-primary bg-brand duration-500 hover:bg-green-300 w-1/3 border-0 hover:-translate-y-2"
                    }
                  >
                    {isLoading ? (
                      <>
                        <img src="/loading.svg" className="w-8" />
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
