import React from "react";
import SectionTitle from "./SectionTitle";

export interface SectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
  titleConfig?: string;
}

export default function Section(props: SectionProps): JSX.Element {
  const { children, id, title, titleConfig } = props;
  return (
    <section id={id} className={"py-8"}>
      <SectionTitle title={title} tailWindConf={titleConfig} />
      {children}
    </section>
  );
}
