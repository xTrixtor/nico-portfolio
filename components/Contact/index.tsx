import { ContactOptions } from "./ContactData";
import { ContactOptionModel } from "../../models/ContactOptionModel";
import Section from "../Section";
import { useForm } from "react-hook-form";
import FormService, { FormValues } from "./FormService";
import { useState } from "react";
import {APIResponseModel} from "../../models/APIResponseModel";

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
    <Section id={"contact"} title={"Kontakt"}>
      <div
        className={
          "flex flex-row w-full tablet:h-[80vh] h-full flex-wrap justify-center"
        }
      >
        <div
          className={
            "flex tablet:w-[49%] w-full h-full justify-center items-center"
          }
        >
          <div className="flex-col h-full flex tablet:w-3/4 w-full justify-center">
            {ContactOptions.map(
              (contactOption: ContactOptionModel): JSX.Element => {
                return (
                  <div
                    className={
                      "flex-row flex dark:bg-slate-800 bg-slate-100 rounded-lg my-3 tablet:mx-8 mx-3 border-white border-2 shadow-md shadow-slate-50/50"
                    }
                  >
                    <div className={"flex justify-start w-full "}>
                      <div
                        className={
                          "tablet:w-20 tablet:h-16 w-10 h-8 rounded-full bg-slate-700 flex justify-center items-center m-3"
                        }
                      >
                        <i
                          className={`${contactOption.icon} tablet:text-3xl text-sm text-white`}
                        ></i>
                      </div>
                      <div
                        className={
                          "flex justify-start items-center w-full tablet:text-xl font-semibold text-sm dark:text-white text-black"
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
        <div className={"flex w-[2%] h-[5px] tablet:h-full"}>
          <div className={"sexy_line h-full flex mx-auto tablet:w-[1px] w-0"} />
        </div>
        <div className={"flex tablet:w-[49%] w-full h-full"}>
          <form
            className={"flex flex-row justify-center items-center w-full h-full py-5"}
            onSubmit={handleSubmit((data) => void handleFormSubmit(data))}
          >
            <div
              className={
                "h-full dark:bg-slate-800 bg-slate-200 tablet:w-3/4 w-full mx-3 rounded-lg shadow-md shadow-slate-50/50 border-2 focus:outline-none focus:border-brand duration-300"
              }
            >
              <div className={"flex-col h-full flex"}>
                <div
                  className={
                    "mx-5 py-3 font-semibold tablet:text-3xl text-xl dark:text-white text-black flex justify-center"
                  }
                >
                  Kontaktformular
                </div>
                <div className={"flex-col justify-center w-full"}>
                  <div
                    className={
                      "mx-5 font-semibold tablet:text-lg text-sm dark:text-white text-black py-1"
                    }
                  >
                    Name:
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
                        "w-full mx-5 font-semibold px-3 py-1 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300 dark:bg-slate-600 bg-slate-100"
                      }
                      placeholder={"Max Mustermann"}
                    />
                  </div>
                  <p
                    className={
                      "flex justify-center text-sm text-red-600 font-medium mt-1"
                    }
                  >
                    {errors.name?.message}
                  </p>
                </div>
                <div className={"flex-col justify-center w-full"}>
                  <div
                    className={
                      "py-1 mx-5 font-semibold tablet:text-lg text-sm dark:text-white text-black"
                    }
                  >
                    Betreff:
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
                        "w-full mx-5 font-semibold px-3 py-1 mx-5 dark:bg-slate-600 bg-slate-100 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300"
                      }
                    />
                  </div>
                  <p
                    className={
                      "flex justify-center text-sm text-red-600 font-medium mt-1"
                    }
                  >
                    {errors.subject?.message}
                  </p>
                </div>
                <div className={"flex-col justify-center w-full"}>
                  <div
                    className={
                      "py-1 mx-5 font-semibold tablet:text-lg text-sm dark:text-white text-black"
                    }
                  >
                    Email:
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
                        "w-full mx-5 font-semibold px-3 py-1 mx-5 dark:bg-slate-600 bg-slate-100 rounded-lg border-2 focus:border-brand focus:outline-none focus:border-brand duration-300"
                      }
                    />
                  </div>
                  <p
                    className={
                      "flex justify-center text-sm text-red-600 font-medium mt-1"
                    }
                  >
                    {errors.email?.message}
                  </p>
                </div>
                <div className={"flex-col flex w-full tablet:h-full h-[200px]"}>
                  <div
                    className={
                      "py-1 mx-5 font-semibold tablet:text-lg text-sm dark:text-white text-black"
                    }
                  >
                    Nachricht:
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
                        "h-full mx-5 font-semibold tablet:text-base text-sm p-2 w-full rounded-lg focus:ring-brand text-white border-2 focus:outline-none focus:border-brand duration-300 dark:bg-slate-600 bg-slate-100"
                      }
                    />
                  </div>
                  <p
                    className={
                      "flex justify-center text-sm text-red-600 font-medium mt-1"
                    }
                  >
                    {errors.message?.message}
                  </p>
                </div>
                <div className={"flex justify-center w-full items-center my-3"}>
                  <button
                    type="submit"
                    className={
                      "btn-sm rounded-xl btn-primary bg-brand duration-500 hover:bg-green-300 tablet:px-8 tablet:py-5 tablet:text-lg font-semibold flex items-center justify-center text-xs border-0 hover:-translate-y-2"
                    }
                  >
                    {isLoading ? (
                      <>
                        <img src="/loading.svg" className="w-8" />
                      </>
                    ) : (
                      <>Senden</>
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
