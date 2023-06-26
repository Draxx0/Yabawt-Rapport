import { ReactElement } from 'react';
import Reactjs from "/assets/svg/reactjs.svg";
import Nestjs from "/assets/svg/nestjs.svg";
import Dots from "/assets/svg/dots.svg";
import Yabawt from "/assets/svg/yabawt.svg";

type FloaterName = "dots" | "react" | "nest" | "yabawt"

const FloaterIcon = ({ name, className }: { name: FloaterName, className: string; }): ReactElement => {
 switch (name) {
  case 'dots':
   return <img src={Dots} alt="" className={`${className} animate-move pointer-events-none select-none`} />

  case 'nest':
   return <img src={Nestjs} alt="" className={`${className} pointer-events-none select-none`} />

  case 'react':
   return <img src={Reactjs} alt="" className={`${className} animate-spinSlow pointer-events-none select-none`} />

  case 'yabawt':
   return <img src={Yabawt} alt="" className={`${className} pointer-events-none select-none`} />

  default:
   return <></>
 }
}

export default FloaterIcon;