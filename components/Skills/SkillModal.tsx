import React from "react";

export interface SkillModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: OnCloseFunction;
}

type OnCloseFunction = () => void;

export default function SkillModal(props: SkillModalProps): JSX.Element {
  const { title, children, isOpen, closeModal } = props;
  if (!isOpen) return <></>;
  return (
    <div>
      <div id="modalOverlay" />
      <div
        className={`bg-slate-800 fixed top-[50%] left-1/2 z-40 rounded-lg border-2 modalAnimation tablet:w-[30%] w-[80%] tablet:h-[60%] h-[90%] flex flex-col`}
        id="modal"
      >
          <div className={"flex w-full h-[15%] justify-center items-center bg-slate-700 rounded-t-lg "}>
            <div className={"tablet:text-4xl text-3xl font-bold text-white py-3"}>
              {title}
            </div>
          </div>
          <div className={"flex w-full h-full justify-center items-center text-center px-5 tablet:py-3 py-6 text-sm tablet:text-base border-y-2"}>
            {children}
          </div>
          <div className={"flex w-full h-[15%] justify-center items-center bg-slate-700 rounded-b-lg"}>
            <div className={"w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xl text-white py-3"}>
              X
            </div>
          </div>
        </div>
    </div>
  );
}
