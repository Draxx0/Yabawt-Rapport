import { Tooltip } from "react-tooltip"

type Props = {
  imageUrl?: string;
  className: string;
  hasImage?: boolean;
  tooltipContent?: string;
  children?: React.ReactElement;
}

const Bloc = ({ imageUrl, className, hasImage = false, children, tooltipContent }: Props) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow-md h-18 w-18 absolute ${className} ${hasImage && "animate-float"}`} data-tooltip-id="data-tooltip" data-tooltip-place="top" data-tooltip-content={tooltipContent}>
      {(hasImage && imageUrl) && (
        <img src={imageUrl} alt="" />
      )}
      {(!hasImage && tooltipContent) && (
        <Tooltip id="data-tooltip" closeOnScroll style={{
          backgroundColor: "#E0234E"
        }} float />
      )}
      {children}
    </div>
  );
}

export default Bloc;