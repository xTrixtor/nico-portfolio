import { useEffect, useRef, useState } from "react";
import { navBarData, socialData } from "./NavBarData";
import { NavBarSocialModel } from "../../models/NavBarSocialModel";
import { NavBarModel } from "../../models/NavBarModel";
import { Col, Row } from "react-bootstrap";
import NavBarFrame from "./NavBarFrame";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <NavBarFrame>
      <nav
        className="h-[75px] items-center flex w-full justify-between bg-slate-700 tablet:fixed relative top-0 z-30 duration-300 font-bold"
        id="navBar"
      >
        <Col className="flex mx-5 relative items-center cursor-pointer font-medium">
          <div className="bg-brand rounded-full h-10 w-10 absolute flex" />
          <a className={"flex"} href={"/"}>
            <p className="pl-2 text-3xl font-[Montserrat-Alternates] z-10 text-white">
              Ni
            </p>
            <p className="text-3xl font-[Montserrat-Alternates] z-10 tracking-widest text-slate-300">
              co Böhner
            </p>
          </a>
        </Col>
        <Col className="">
          <ul className="tablet:flex hidden relative">
            {navBarData.map((navBarItem: NavBarModel) => (
              <>
                <li className="tablet:mx-3 mx-0 my-6 tablet:my-0 text-xl duration-500 text-slate-300 navBarItem">
                  <a href={navBarItem.href}>{navBarItem.title}</a>
                </li>
              </>
            ))}
          </ul>
        </Col>
          <i
              className={`${
                  showNavBar ? "fa-solid fa-xmark border-2" : "fa-solid fa-bars"
              } text-2xl rounded-lg mx-auto tablet:hidden inline-flex px-4 mx-2`}
              onClick={() => setShowNavBar(!showNavBar)}
          />
        <Col className="mx-5 hidden tablet:inline-flex">
          {socialData.map((socialDataModel: NavBarSocialModel) => (
            <div>
              <div className="px-1 flex ">
                <i
                  className={
                    socialDataModel.icon +
                    " text-2xl duration-500 hover:text-black hover:bg-slate-100 rounded-full h-10 w-10 flex justify-center items-center z-20 text-slate-300"
                  }
                ></i>
              </div>
            </div>
          ))}
        </Col>
      </nav>
      {showNavBar ? (
        <div className="flex items-center text-center w-full justify-center px-4 bg-base-300 font-medium top-0 bottom-0 z-30">
          <ul className="items-center tablet:hidden">
            {navBarData.map((navBarItem: NavBarModel) => (
              <>
                <li className="tablet:mx-3 mx-0 my-6 tablet:my-0 hover:text-brand font-semibold">
                  <a href={navBarItem.href}>{navBarItem.title}</a>
                </li>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </NavBarFrame>
  );
}

export default NavBar;
