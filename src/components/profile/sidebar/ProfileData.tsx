import useGetUser from "@/hooks/useGetUser";
import profileImage from "../../../assets/Profile/SideBar/images/profileImage.jpeg";
import { useEffect, useState } from "react";

const ProfileData = () => {
  const [userName, setUserName] = useState("");
  const user = useGetUser();

  useEffect(() => {
    setUserName(user.name);
  }, [user]);

  return (
    <div className="w-[200px] h-[133px] border-b-[1px] pt-[18px]  pr-[10px] pb-[24px] pl-[10px]">
      <div className="">
        <img
          src={profileImage}
          alt="profileImage"
          className="w-[50px] h-[50px] rounded-full "
        />
        <div className="w-full flex flex-col gap-1">
          <h3 className="inter w-[180px] h-[18px] font-[500] text-[15px] leading-[18.15px]">
            {userName}
          </h3>
          <h4 className="inter w-[77px] h-[16px] font-[400] text-[13px] leading-[15.73px] text-[#5F5F61]">
            Intermediate
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
