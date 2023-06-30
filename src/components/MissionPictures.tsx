import { useState } from "react";
import Modal from "./common/Modal";

const MissionPictures = ({ pictures }: { pictures: Array<{ path: string }> }) => {
 const [currentImageUrl, setCurrentImageUrl] = useState<string>("");
 console.log("CURRENT IMAGE", currentImageUrl)
 return (
  <div className="mt-16">
   <p className="font-semibold text-lg">Quelques images</p>
   <div className="flex gap-10 flex-wrap mt-10">
    {pictures.map((picture, index) => (
     <img src={picture.path} alt="" onClick={() => setCurrentImageUrl(picture.path)} key={index} className="w-48 object-cover cursor-zoom-in transition ease-in-out duration-300 border-transparent border-2 rounded hover:border-red hover:-translate-y-1" />
    ))}
   </div>

   <Modal isOpen={!!currentImageUrl} path={currentImageUrl} handleCloseModal={() => setCurrentImageUrl("")} />
  </div>
 );
}

export default MissionPictures;