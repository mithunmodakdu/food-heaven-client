const ActionButton = ({buttonValue, clickedAction}) => {
  return (
    <button onClick={clickedAction} className={`border-2 px-3 py-1 my-3 md:text-lg text-headingColor  hover:text-whiteColor  active:text-whiteColor  border-primaryColor hover:bg-primaryColor active:bg-primaryHoverColor`}>
      {buttonValue}
    </button>
  );
};

export default ActionButton;

// 