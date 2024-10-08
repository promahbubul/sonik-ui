const Item = ({ heading, title }) => {
  // console.log(heading);
  console.log(title);
  return (
    <div className="flex flex-row  items-start">
      <div className="w-7/12">
        <h2 className="text-xs font-light text-white">{title[0]}</h2>
        <h1 className="mt-1 text-2xl md:text-3xl font-semibold font-phudu">
          Lost in Time | Folamour
        </h1>
      </div>
      <div className="w-5/12">
        <h2 className="text-xs font-light text-white">D</h2>
        {/* {title.map((item) => (
          <h1 key={item} className="mt-1 text-2xl md:text-3xl font-semibold font-phudu">
            {item}
          </h1>
        ))} */}
      </div>
    </div>
  );
};
export default Item;
