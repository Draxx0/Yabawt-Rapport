const useDetectModal = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
};

export default useDetectModal;
