export default function HomeButton():JSX.Element{
    return(
        <div className={"fixed bottom-0 right-0 mx-5 my-5 tablet:hidden"}>
            <a className={"w-10 h-10 bg-brand rounded-lg flex justify-center items-center"} href={"#landing"}>
                <i className="fa-sharp fa-solid fa-arrow-up text-white"/>
            </a>
        </div>
    )
}