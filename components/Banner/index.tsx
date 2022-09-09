export interface BannerProps{
    title:string;
    buttonTitle?:string;
    buttonHref?:string;
    buttonBoolean:boolean;
}

export default function Banner(props:BannerProps):JSX.Element{
    const {title, buttonTitle, buttonBoolean, buttonHref} = props;
    return(
        <div id={"footer"}>
            <div className={"text-3xl text-white font-bold py-5"}>
                {title}
                <div
                    id={"titleUnderline"}
                    className={"flex justify-center items-center pb-3"}
                />
            </div>
            {buttonBoolean?<div className={"pb-3"}>
                <a className={"btn btn-primary bg-brand duration-500 hover:bg-slate-400 border-0 hover:-translate-y-2 fa-regular fa-right-from-bracket"}
                   href={buttonHref}>{buttonTitle}
                </a>
            </div>:<></>}

        </div>
    )
}