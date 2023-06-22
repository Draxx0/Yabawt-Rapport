const Link = ({ label, url }: { label: string, url: string }) => {
 return (
  <a href={url} className="font-semibold font-Montserrat text-lg relative hover:before:w-2/3  before:[] before:w-0 before:rounded before:h-[0.15rem] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:bg-red">{label}</a>
 );
}

export default Link;