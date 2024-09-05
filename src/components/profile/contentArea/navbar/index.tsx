import { useUserMenuSelectContext } from "@/pages/user/profile/UserProfile";
import { Link } from "react-router-dom";
import notification from "../../../../assets/Profile/mobile/notification.png";

const Navbar = () => {
  const { head } = useUserMenuSelectContext();
  return (
    <div className="w-[400px] 400px:w-[1128.5px] h-[70px] 400px:h-[130px] bg-[#FFFFFF] py-[14px] px-[10px] 400px:p-0 flex justify-between 400px:block">
      <div className="h-[70px] p-[24px] hidden 400px:block">
        <ul className="flex gap-10">
          <li>
            <Link
              to="/"
              className="inter w-[31px] h-[18px] font-[400] text-[12px] text-[#5A5C60] leading-[18px]"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="inter w-[31px] h-[18px] font-[400] text-[12px] text-[#5A5C60] leading-[18px]"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="inter w-[31px] h-[18px] font-[400] text-[12px] text-[#5A5C60] leading-[18px]"
            >
              Help center
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="inter w-[31px] h-[18px] font-[400] text-[12px] text-[#5A5C60] leading-[18px]"
            >
              Customer care
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-[45px]  400px:w-full 400px:h-[60px] 400px:p-[24px] flex items-center bg-red-500">
        <h1 className="w-[121px] h-[28px] text-[24px] font-[700] leading-[28px] text-[#1B1C1F] whitespace-nowrap">
          {head}
        </h1>
      </div>

      {/* mobile icon */}
      <div className="border-[2px] 400px:hidden">
        hello
        <img
          src={notification}
          alt="notification"
          className="w-[17px] h-[18px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
