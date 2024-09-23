import { CiLocationOn } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <div className="Navbar_false  bg-[#49c3f2] m-0 pt-[0.6vw] pb-[0.6vw]">
        <div className="middle_navbar  xs:gap-2 py-1 px-0 flex  justify-between items-center  max-w-[1250px] mx-auto">
          <div className="left flex  items-center gap-1">
            <CiLocationOn className=" w-[30px] h-[30px] text-white" />
            <p className=" text-white opacity-50 font-montserrat xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] font-normal">
              Manzil:
            </p>
            <a
              href=""
              className=" xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] text-white no-underline font-montserrat text-[0.9vw] font-normal"
            >
              Tashkent
            </a>
          </div>
          <div className="right flex items-center  gap-10">
            <a href="" className="flex xs:hidden md:flex items-center gap-2">
              <IoLogoInstagram className=" w-[23px] h-[23px] text-white" />
              <p className=" text-white  font-montserrat text-[0.9vw] font-normal">
                Instagram
              </p>
            </a>
            <a href="" className="flex xs:hidden md:flex items-center gap-2">
              <PiTelegramLogoLight className=" w-[23px] h-[23px] text-white" />
              <p className="  text-white  font-montserrat text-[0.9vw] font-normal">
                Telegram
              </p>
            </a>
            <a
              href="tel:+998555001411"
              className="text-white xs:text-[10px] sm:text-[16px] md:text-[19px] lg:text-[20px] no-underline font-montserrat font-semibold text-[1.2vw]"
            >
              +998 55 500 14 11
            </a>
            <div className="language xs:text-[10px] sm:text-[16px] md:text-[19px] lg:text-[20px]">
              <select className="navbar_links bg-[#49c3f2] text-white px-2 no-underline rounded-xl font-montserrat xs:text-[10px] sm:text-[16px] md:text-[19px] lg:text-[20px]">
                <option value="uz" className="bg-[#072B3D]">
                  Uzb
                </option>
                <option value="en" className="bg-[#072B3D]">
                  Eng
                </option>
                <option value="ru" className="bg-[#072B3D]">
                  Rus
                </option>
              </select>
            </div>
            <button className=" xs:hidden xs:text-[10px] sm:text-[16px] md:text-[19px] lg:text-[20px] md:flex bg-white border-none text-[#49c3f2] font-semibold p-[7px] px-[25px] font-montserrat text-[1.2vw] rounded-[8px]">
              Bonus olish
            </button>
          </div>
        </div>
      </div>

      <div className=" flex items-center gap-8 max-w-[1250px] mx-auto py-[9px] px-0 xs: ">
        <button className=" flex items-center bg-[#49C3F2] px-[24px] py-[7px] rounded-[8px] gap-2 xs:px-[12px] xs:py-[4px] sm:px-[15px] sm:py-[5px] md:px-[20px] md:py-[6px] lg:px-[24px] lg:py-[7px] ">
          <SlMenu className="text-[#fff]  xs:w-[14px] xs:h-[14px] sm:w-[16px] sm:h-[16px]  md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] " />
          <p className=" text-[#fff] font-montserrat  xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] ">
            Katalog
          </p>
        </button>
        <a href="" className="">
          <img
            className=" w-[190px] h-[44px]"
            src="./image/logo.429f48cab1bd213fe676.png"
            alt=""
          />
        </a>
        <div className="flex items-center border border-custom-color rounded-[5px] w-[35%]">
          <label
            htmlFor="search-input"
            className="flex items-center bg-[#49c3f2] w-[100%] rounded-br-[5px] rounded-tr-[5px]"
          >
            <input
              type="text"
              id="search-input"
              placeholder="Katalog"
              className="  p-[7px] w-[100%]"
            />
            <FiSearch className="m-0 mx-[35px] text-white w-[25px] h-[25px]" />
          </label>
        </div>

        <a href="">
          <p className=" text-[#000]  font-montserrat text-[0.9vw]">
            <b> Biz haqimizda</b>
          </p>
        </a>
        <a href="" className=" flex items-center">
          <span>0</span>
          <CiHeart className=" w-[25px] h-[25px] pt-[3px]" />
          <p className=" text-[#000]  font-montserrat text-[0.9vw]">
            <b> Sevimlilar</b>
          </p>
        </a>
      </div>
    </>
  );
};
export default Header;
