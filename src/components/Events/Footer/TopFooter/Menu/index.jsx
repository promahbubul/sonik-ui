import Link from "next/link";

const Menu = ({ heading, menus }) => {
  return (
    <div className="lg:w-3/12">
      <h3 className="text-base font-bold text-white">{heading}</h3>
      <div className="mt-3 flex flex-col gap-1">
        {menus.map((item) => (
          <Link
            key={item.id}
            href="#"
            className="text-gray-100 text-base underline "
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Menu;
