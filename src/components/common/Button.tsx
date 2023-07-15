import Icon from "./Icon";


const Button = ({ text, hasArrow = false, url }: { text: string; hasArrow: boolean, url?: string; }) => {
  return (
    <a href={url} className="bg-red px-4 py-2 text-white flex items-center gap-3 w-fit rounded-md group cursor-pointer">
      {text}
      {hasArrow && (
        <Icon name="arrow" className="group-hover:translate-x-2 transition ease-in-out duration-200 text-white" />
      )}
    </a>
  );
}

export default Button;