import Image from "next/image";

const Header = () => {
  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };
  return (
    <div className="h-[450px] md:min-h-[850px] p-10   w-full relative ">
      <div className="w-full h-full  object-cover absolute inset-0">
        <Image
          width={1280}
          height={499}
          src="/assets/event/header.png"
          alt="Picture of the author"
          style={imageStyle}
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="h-full max-w-[1280px] w-full mx-auto left-1/2  -translate-x-1/2 top-0 absolute z-30 ">
        <div className="absolute z-20  flex flex-col justify-between  inset-0 ">
          {/* Header */}
          <div className="  mt-8">
            <div className="w-32 h-14  mx-auto">
              <Image
                width={100}
                height={100}
                src="/assets/footer-logo.png"
                alt="footer logo image"
              />
            </div>
          </div>
          {/* Bottom */}
          <div className="mb-8 px-5 md:p-5">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h1 className="text-5xl md:text-[64px] font-semibold font-phudu">
                Folamour
              </h1>
              <div className="backdrop-blur-sm flex flex-row justify-between mt-5 md:mt-0 items-center bg-white/30 max-w-[536px] w-full py-2 md:py-3 px-5 md:px-10 rounded-xl">
                <div className="flex flex-row items-center gap-3 font-phudu  font-bold text-xl md:text-3xl text-black">
                  <p className="">FROM</p>
                  <p className="">$35.00</p>
                </div>
                <button className="py-2 px-3 md:py-4 md:px-6 rounded-3xl bg-cream text-black font-bold text-base md:text-xl border-none outline-none">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
