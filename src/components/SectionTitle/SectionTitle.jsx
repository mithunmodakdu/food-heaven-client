const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-3/4 md:w-4/12 lg:w-3/12 mx-auto text-center mt-[70px] mb-[30px]">
      <p className="text-primaryColor mb-2"><i className="fa-solid fa-burger"></i> <i className="fa-solid fa-mug-hot"></i> {subHeading}</p>
      <h3 className="text-2xl md:text-3xl text-headingColor font-heading uppercase border-b-2 pb-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;