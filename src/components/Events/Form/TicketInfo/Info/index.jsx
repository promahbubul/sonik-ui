const Info = ({ heading, title, className }) => {
  return (
    <div className={` ${className}`}>
      <h5 className="text-xs  font-medium text-white">{heading}</h5>
      <p className="mt-2 font-bold text-base text-white">{title}</p>
    </div>
  );
};
export default Info;
