interface OpenModalBtnTypes {
  children: React.ReactNode;
}

const OpenModal = ({ children }: OpenModalBtnTypes) => {
  return (
    <button className="p-2 rounded-lg text-xs font-bold bg-black text-white hover:cursor-pointer hover:bg-grey-500 active:bg-black sm-mobile:text-sm sm-mobile:p-4">
      {children}
    </button>
  );
};

export default OpenModal;
