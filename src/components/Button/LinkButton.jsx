import { Link } from "react-router-dom";

const LinkButton = ({buttonValue, buttonPath, isFeatured, clickedAction}) => {
  return (
    <button onClick={clickedAction} className={`border-2 px-3 py-1 my-3 md:text-lg ${isFeatured? 'text-whiteColor hover:text-headingColor active:text-headingColor'  : 'text-headingColor' }   hover:text-whiteColor  active:text-whiteColor  border-primaryColor hover:bg-primaryColor active:bg-primaryHoverColor`}>
      <Link className="" to={`/${buttonPath}`}>
        {buttonValue}
      </Link>
    </button>
  );
};

export default LinkButton;
