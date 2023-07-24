import Icon from "./Icon";

const Connect = () => {
 return (
  <div className="hidden items-center gap-4 md:flex">
   <Icon name="website" url="https://william-fort.fr" className="hover:-rotate-12 hover:scale-110 transition ease-in duration-200" />
   <Icon name="linkedin" url="https://www.linkedin.com/in/william-fort/" className="hover:-rotate-12 hover:scale-110 transition ease-in duration-200" />
   <Icon name="github" url="https://github.com/Draxx0" className="hover:-rotate-12 transition hover:scale-110 ease-in duration-200" />
  </div>
 );
}

export default Connect;