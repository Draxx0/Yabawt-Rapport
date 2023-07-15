import clsx from "clsx";
import useDetectBottomPage from "../../hook/useDetectBottomPage";
import Icon from "./Icon";

const ReturnTop = () => {

 const isDisplay = useDetectBottomPage();

 const classes = clsx({
  "visible -translate-y-3": isDisplay,
  "invisible pointer-events-none": !isDisplay
 }, "transition ease-in-out duration-100 fixed bottom-10 right-10 bg-red rounded-full w-10 h-10 z-[100]")

 return (
  <div className={classes}>
   <div className="relative flex justify-center items-center w-full h-full -rotate-90" onClick={() => window.scrollTo(0, 0)}>
    <Icon name="arrow" className="text-white" />
   </div>
  </div>
 );
}

export default ReturnTop;