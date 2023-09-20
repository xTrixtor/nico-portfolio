import { NavBarModel } from "../../models/NavBarModel";
import { NavBarSocialModel } from "../../models/NavBarSocialModel";

export const navBarData: NavBarModel[] = [
  { title: "Über mich", href: "#aboutMe" },
  { title: "Skills", href: "#skills" },
  { title: "Projekte", href: "#projects" },
  { title: "Extras", href: "/extras" },
];

export const socialData: NavBarSocialModel[] = [
  { icon: "fa-brands fa-github", href: "https://github.com/xTrixtor" },
  {
    icon: "fa-brands fa-xing",
    href: "https://www.xing.com/profile/Nico_Boehner/cv",
  },
  {
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/nico_boehner/",
  },
];
