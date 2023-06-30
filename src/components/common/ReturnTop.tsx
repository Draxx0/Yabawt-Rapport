import { useState } from "react";
import useDetectBottomPage from "../../hook/useDetectBottomPage";
import Icon from "./Icon";

const ReturnTop = () => {

 const isDisplay = useDetectBottomPage()

 return (
  <div className={`${isDisplay ? "opacity-200 -translate-y-3" : "opacity-0 pointer-events-none"} transition ease-in-out duration-100 fixed bottom-10 right-10 bg-red rounded-full w-10 h-10 z-[100]`}>
   <div className="relative flex justify-center items-center w-full h-full -rotate-90" onClick={() => window.scrollTo(0, 0)}>
    <Icon name="arrow" />
   </div>
  </div>
 );
}

export default ReturnTop;