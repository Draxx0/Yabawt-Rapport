import useDetectBottomPage from "../../hook/useDetectBottomPage";
import Icon from "./Icon";

const ReturnTop = () => {

  const isDisplay = useDetectBottomPage()

  console.log(isDisplay)

  return (
    <div className={`${isDisplay ? "visible -translate-y-3" : "invisible pointer-events-none"} transition ease-in-out duration-100 fixed bottom-10 right-10 bg-red rounded-full w-10 h-10 z-[100]`}>
      <div className="relative flex justify-center items-center w-full h-full -rotate-90" onClick={() => window.scrollTo(0, 0)}>
        <Icon name="arrow" />
      </div>
    </div>
  );
}

export default ReturnTop;