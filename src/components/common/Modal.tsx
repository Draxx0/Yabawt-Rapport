import useDetectModal from "../../hook/useDetectModal";
import Icon from "./Icon";

const Modal = ({ isOpen, path, handleCloseModal }: { isOpen: boolean, path: string, handleCloseModal: () => void }) => {
 useDetectModal({ isOpen })
 return (
  <div className={`${isOpen ? "block" : " hidden"} z-30 p-4 fixed left-1/2 top-1/2 h-[50vh] w-[50vw] -translate-x-1/2  flex justify-center items-center translate-y-1/2 bg-white shadow-md rounded`}>
   <div className="relative flex justify-center items-center w-full h-full">
    <div className="absolute right-0 top-0 cursor-pointer transition ease-in-out duration-700 hover:rotate-180" onClick={handleCloseModal}>
     <Icon name="cross" />
    </div>
    <img src={path} alt="" className="object-contain w-full h-full" />
   </div>
  </div>
 );
}

export default Modal;