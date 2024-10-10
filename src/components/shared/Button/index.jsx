const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className && className
      } w-full py-4 rounded-md  font-bold text-sm`}
    >
      {children}
    </button>
  );
};
export default Button;
