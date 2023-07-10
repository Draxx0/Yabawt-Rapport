import { useEffect, useState } from "react";
import Connect from "./Connect";
import Icon from "./Icon";
import Link from "./Link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };
  }, [])

  return (
    <header className={`border-gray-100 py-4 fixed w-full z-50 transition-all ease-in-out duration-200 ${isScrolled && "shadow-sm border-b-2 bg-white"} `}>
      <nav className="px-8 container m-auto flex justify-between items-center">
        <div className="z-50">
          <Icon name="logo" />
        </div>

        <ul className="items-center gap-10 hidden md:flex">
          <li>
            <Link label="Présentation" url="presentation" />
          </li>
          <li>
            <Link label="Yabawt" url="yabawt" />
          </li>
          <li>
            <Link label="Missions" url="missions" />
          </li>
          <li>
            <Link label="Retours" url="testimonials" />
          </li>
          <li>
            <Link label="Bilan" url="review" />
          </li>
        </ul>

        <Connect />

        <div className="flex flex-col gap-1 md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`bg-red w-8 h-1 rounded transition-transform duration-500 ease-in-out  ${isMobileMenuOpen ? "-rotate-45 translate-y-2" : ""}`}></div>
          <div className={`bg-red w-8 h-1 rounded transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`bg-red w-8 h-1 rounded transition-transform duration-500 ease-in-out  ${isMobileMenuOpen ? "rotate-45 -translate-y-2" : ""}`}></div>
        </div>

        <div className={`bg-white fixed h-screen w-screen z-40 top-0 md:hidden flex flex-col left-0 transition-transform ease-in-out duration-500 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-[100%]"}`}>
          <div className="flex justify-evenly items-center flex-col h-full">

            <ul className="items-center gap-10 flex flex-col ">
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link label="Présentation" url="presentation" />
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link label="Yabawt" url="yabawt" />
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link label="Missions" url="missions" />
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link label="Retours" url="testimonials" />
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link label="Bilan" url="review" />
              </li>
            </ul>

            <div className="flex items-center justify-center gap-4 md:hidden">
              <Icon name="website" url="https://william-fort.fr" />
              <Icon name="linkedin" url="https://www.linkedin.com/in/william-fort/" />
              <Icon name="github" url="https://github.com/Draxx0" />
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
}

export default Header;
