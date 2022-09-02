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
        className={`bg-white/[.7] fixed top-[50%] left-1/2 z-40 tablet:w-1/4 tablet:h-2/4 h-2/3 w-3/4 rounded-lg p-1 border-2 modalAnimation`}
        id="modal"
      >
        <div
          className={"border-[3px] rounded-lg border-slate-400 w-full h-full "}
        >
          <div
            className={`flex-col flex items-center h-full justify-between py-3 px-3 bg-slate-800 rounded`}
          >
            <div className="flex tablet:px-4 tablet:py-2 py-1 px-2 bg-slate-600 justify-center tablet:text-3xl text-xl rounded-full text-brand font-bold">
              {title}
            </div>
            <div className="flex bg-slate-800 w-full justify-center rounded-lg text-sm px-2 py-2 text-white font-medium tablet:tracking-wide tablet:text-sm tracking-tighter text-xs text-center border-2 my-2">
              {children}
            </div>
            <div
              className={`bg-transparent border-2 tablet:w-10 tablet:h-10 w-5 rounded-full flex items-center justify-center`}
              onClick={() => closeModal()}
            >
              <button className="text-white flex tablet:text-xl text-sm">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
