import { NavBarModel } from "../../models/NavBarModel";
import { NavBarSocialModel } from "../../models/NavBarSocialModel";

export const navBarData: NavBarModel[] = [
  { title: "Über mich", href: "#aboutMe" },
  { title: "Projekte", href: "#projects" },
  { title: "Kontakt", href: "#contact" },
];

export const socialData: NavBarSocialModel[] = [
  { icon: "fa-brands fa-github" },
  { icon: "fa-brands fa-xing" },
  { icon: "fa-brands fa-instagram" },
];
