import { useEffect, useState } from "react";
import { Checkbox } from "../../../../../ui/checkbox";
import { fetchEvents } from "@/api/user";
import { useUserMenuSelectContext } from "@/pages/user/profile/UserProfile";
import localStorageForTotalPage from "@/utils/localStorageForTotalPage";
type Props = {};

const Header = (props: Props) => {
  const { bookedOnly, setBookedOnly, setEvents, setTotal } =
    useUserMenuSelectContext();
  useEffect(() => {
    async function fetchEventsApi() {
      let response = await fetchEvents({
        rowCount: 10,
        pageCount: 1,
        total: 0,
        bookedOnly,
      });
         let total = localStorageForTotalPage();
         setTotal(total);
      setEvents(response);
    }
    fetchEventsApi();
  }, [bookedOnly]);
  return (
    <div className="w-full flex justify-between h-[37px]">
      <div className="w-[235px] h-[37px] flex flex-col ">
        <h1 className="w-[146px] h-[21px] font-[600] text-[18px] leading-[21.8px] text-[#313336]">
          Upcoming classes
        </h1>
        <p className="w-[235px] h-[15px] font-[400] text-[12px] leading-[14.52px] text-[#5F5F61]">
          for next 7 days
        </p>
      </div>
      <div className="flex">
        <div className="items-top flex space-x-2 ">
          <div className="grid gap-[10px] leading-none">
            <label
              htmlFor="bookedOnly"
              className="text-[14px] font-[500] leading-[16.71px] text-[#313336] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Booked only
            </label>
          </div>
          <Checkbox
            id="bookedOnly"
            className="border-[#E6E6E6] w-[20px] h-[20px] rounded-[5px] border-[1.5px]"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setBookedOnly(!bookedOnly);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
