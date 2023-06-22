import Icon from "./Icon";
import Link from "./Link";

const Header = () => {
 return (
  <header className="border-gray-100 border-b-2 py-4">
   <nav className="px-8 container m-auto flex justify-between items-center">
    <Icon name="logo" />

    <ul className="flex items-center gap-4">
     <li>
      <Link label="Présentation" url="" />
     </li>
     <li>
      <Link label="Yabawt" url="" />
     </li>
     <li>
      <Link label="Missions" url="" />
     </li>
     <li>
      <Link label="Bilan" url="" />
     </li>
    </ul>

    <div className="flex items-center gap-4">
     <Icon name="website" url="https://william-fort.fr" />
     <Icon name="linkedin" url="https://www.linkedin.com/in/william-fort/" />
     <Icon name="github" url="https://github.com/Draxx0" />
    </div>
   </nav>
  </header >
 );
}

export default Header;