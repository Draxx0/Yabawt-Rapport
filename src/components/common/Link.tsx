const Link = ({ label, url }: { label: string, url: string }) => {
 return (
  <a href={"#" + url} className="font-semibold font-Montserrat text-lg relative group">{label}
   <span className="w-0 h-[0.15rem] rounded bg-red absolute left-1/2 -translate-x-1/2 -bottom-2 group-hover:w-1/2 transition-all ease-in-out duration-200"></span>
  </a>
 );
}

export default Link;