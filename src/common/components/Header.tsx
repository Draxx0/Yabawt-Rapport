import { useEffect, useState } from "react";
import Connect from "./Connect";
import Icon from "./Icon";
import Link from "./Link";

const Header = () => {
 const [isScrolled, setIsScrolled] = useState<boolean>(false);

 useEffect(() => {
  window.onscroll = () => {
   setIsScrolled(window.scrollY === 0 ? false : true);
  };
 }, [])

 return (
  <header className={`border-gray-100 py-4 fixed w-full z-50 transition-all ease-in-out duration-200 ${isScrolled && "shadow-sm border-b-2 bg-white"} `}>
   <nav className="px-8 container m-auto flex justify-between items-center">
    <Icon name="logo" />

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

    <div className="flex flex-col gap-1 md:hidden">
     <div className="bg-red w-8 h-1 rounded"></div>
     <div className="bg-red w-8 h-1 rounded"></div>
     <div className="bg-red w-8 h-1 rounded"></div>
    </div>
   </nav>
  </header >
 );
}

export default Header;