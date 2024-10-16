const InputOTP = ({ className, name, value, onChange }) => {
  return (
    <div className={`${className && className}`}>
      <input
        maxLength="1"
        className={
          " font-bold  text-center border-none outline-none text-white bg-white/10 w-full py-4 md:py-5 px-3 md:px-3 rounded-lg text-base"
        }
        type="text"
        name={name && name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputOTP;
