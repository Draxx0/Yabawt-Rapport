import clsx from "clsx";

type Props = {
  subtitle: string;
  text: string;
  displayingText: "left" | "right";
  imageUrl?: string;
  children?: React.ReactElement
}

const MissionRow = ({ subtitle, text, displayingText, imageUrl, children }: Props) => {
  const containerClass = clsx({
    "flex": imageUrl,
    "block": !imageUrl,
    "lg:flex-row": displayingText === "left",
    "lg:flex-row-reverse": displayingText === "right"
  }, "mt-20 justify-between flex-col gap-10 lg:gap-0")

  const textContainerClass = clsx({
    "lg:w-full": !imageUrl,
    "lg:w-1/2 lg:max-w-md": imageUrl
  }, "flex flex-col gap-7")

  const imageContainerClass = clsx({
    "justify-end": displayingText === "left",
    "justify-start": displayingText === "right",
    "hidden": !imageUrl
  }, "lg:w-1/2 flex")

  return (
    <div className={containerClass}>
      <div className={textContainerClass}>
        <p className="text-2xl font-semibold">{subtitle}</p>
        <p>{text}</p>
        {children}
      </div>

      <div className={imageContainerClass}>
        <img src={imageUrl} alt="" className="object-contain" />
      </div>
    </div>
  );
}

export default MissionRow;