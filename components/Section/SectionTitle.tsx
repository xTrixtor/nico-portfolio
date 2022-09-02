export interface SectionTitleProps {
  title: string;
  tailWindConf?: string;
}

export default function SectionTitle(props: SectionTitleProps): JSX.Element {
  const { title, tailWindConf } = props;
  return (
    <>
      <div
        className={`flex justify-center items-center tablet:text-6xl text-3xl py-5 font-bold ${tailWindConf}`}
      >
        {title}
      </div>
      <div
        id={"titleUnderline"}
        className={"flex justify-center items-center pb-3"}
      />
    </>
  );
}
