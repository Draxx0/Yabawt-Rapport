import Connect from "./Connect";

const Footer = () => {
 return (
  <footer className="bg-white py-12 border-gray-100 border-t-2 w-full z-50 shadow-sm relative">
   <div className="container flex items-center justify-evenly">
    <p>Rapport de stage Yabawt - 2023</p>
    <Connect />
   </div>
  </footer>
 );
}

export default Footer;