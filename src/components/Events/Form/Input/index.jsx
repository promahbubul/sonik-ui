const Input = ({
  label,
  input,
  type,
  onChange,
  value,
  icon,
  placeholder,
  className,
}) => {
  return (
    <div className={`mt-2   ${className && className}`}>
      <label className="text-sm font-bold text-white" htmlFor="">
        {label}
      </label>
      <div className="bg-white/10 relative border mt-2 border-white/10 rounded">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon && icon()}
        </div>
        <input
          onChange={onChange}
          value={value}
          className=" py-3 w-full pl-9 border-none outline-none bg-transparent font-bold text-xs placeholder:text-white/30 "
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default Input;
