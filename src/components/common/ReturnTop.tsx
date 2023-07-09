import useDetectBottomPage from "../../hook/useDetectBottomPage";
import Icon from "./Icon";
import clsx from "clsx";

const ReturnTop = () => {

 const isDisplay = useDetectBottomPage();

 const classes = clsx({
  "opacity-100  -translate-y-3": isDisplay,
  " translate-y-24 pointer-events-none": !isDisplay
 }, "transition ease-in-out duration-100 fixed bottom-10 right-10 bg-red rounded-full w-10 h-10 z-[100]")

 return (
  <div className={classes}>
   <div className="relative flex justify-center items-center w-full h-full -rotate-90" onClick={() => window.scrollTo(0, 0)}>
    <Icon name="arrow" />
   </div>
  </div>
 );
}

export default ReturnTop;