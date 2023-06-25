const Bloc = ({ imageUrl, className }: { imageUrl: string; className: string; }) => {
 return (
  <div className={`bg-white p-4 rounded-md shadow-md h-18 w-18 absolute ${className}`}>
   <img src={imageUrl} alt="" />
  </div>
 );
}

export default Bloc;