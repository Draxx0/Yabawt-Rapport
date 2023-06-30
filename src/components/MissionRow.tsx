type Props = {
  subtitle: string;
  text: string;
  displayingText: "left" | "right";
  imageUrl: string;
}

const MissionRow = ({ subtitle, text, displayingText, imageUrl }: Props) => {
  return (
    <div className={`mt-20 flex ${displayingText === "left" ? "flex-row" : "flex-row-reverse"} justify-between flex-col gap-10 lg:gap-0 lg:flex-row`}>
      <div className="flex flex-col gap-7 lg:w-1/2 lg:max-w-md">
        <p className="text-2xl font-semibold">{subtitle}</p>

        <p>{text}</p>
      </div>

      <div className={`${displayingText === "left" ? "justify-end" : "justify-start"} lg:w-1/2 flex`}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default MissionRow;