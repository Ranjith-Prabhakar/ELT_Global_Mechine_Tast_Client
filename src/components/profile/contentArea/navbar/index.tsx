import { useUserMenuSelectContext } from "@/pages/user/profile/UserProfile";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { head } = useUserMenuSelectContext();
  console.log("head",head)
  return (
    <div className="w-[1128.5px] h-[130px] bg-[#FFFFFF]">
      <div className="h-[70px] p-[24px]">
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
      <div className="h-[60px] p-[24px] flex items-center">
        <h1 className="w-[121px] h-[28px] text-[24px] font-[700] leading-[28px] text-[#1B1C1F] whitespace-nowrap">
         {head}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
