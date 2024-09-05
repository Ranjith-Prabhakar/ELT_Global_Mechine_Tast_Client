import profImage from "../../../../../../assets/Profile/SideBar/images/profileImage.jpeg";
import { Button } from "../../../../../ui/button";
import { fetchEvents } from "@/api/user";
import { useSelector } from "react-redux";
import { TUser } from "@/redux/features/user/userSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../ui/table";
import { useEffect, useState } from "react";
import { formatEventDate } from "./utils/formatEventDate";
import Modal from "./Modal";
import {
  TEvents,
  useUserMenuSelectContext,
} from "@/pages/user/profile/UserProfile";
import localStorageForTotalPage from '../../../../../../utils/localStorageForTotalPage';

const TableComponent = () => {
  const { events, setEvents, setTotal, total } = useUserMenuSelectContext();
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState("");
  const state = useSelector((state: { user: TUser }) => state.user);
  useEffect(() => {
    async function fetchCall() {
      let fetch = (await fetchEvents({})) as unknown as TEvents;
      let total = localStorageForTotalPage();
      setTotal(total);
      setEvents(fetch);
    }

    fetchCall();
  }, []);

  useEffect(() => {
    console.log("=======tottt", total);
  }, [total]);
  return (
    <>
      {events ? (
        <Table className="bg-[#fff]">
          <TableHeader>
            <TableRow className="bg-[#F6F6F6] border-b-0">
              <TableHead className="w-[208px] h-[40px] px-[24px] ">
                <h1 className="inter w-[64px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#5F5F61]">
                  Class name
                </h1>
              </TableHead>
              <TableHead className="w-[238px] h-[40px] px-[24px]">
                <h1 className="inter w-[53px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#5F5F61]">
                  Instructor
                </h1>
              </TableHead>
              <TableHead className="w-[160px] h-[40px] px-[24px]">
                <h1 className="inter w-[42px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#5F5F61]">
                  Actions
                </h1>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((events, index) => (
              <TableRow key={events.instructor?.name + "" + index}>
                <TableCell className="w-[208px] h-[70px] border-b-[1px] border-t-0 border-[#E2E2E2] ps-[24px]">
                  <div className="flex items-center gap-3 w-full ">
                    <div className="">
                      <p className="font-[500] text-[14px] inter leading-[20px] text-center text-[#A1A0A3]">
                        {index + 1}
                      </p>
                    </div>
                    <div className="flex flex-col h-[40px] ">
                      <div>
                        <h6 className="inter font-[600] text-[14px] leading-[20px] text-[#222124] whitespace-nowrap">
                          {events.courseName}
                        </h6>
                      </div>
                      <div>
                        <p className="inter font-[400] text-[14px] leading-[20px] text-[#5F5F61]">
                          {formatEventDate(events.date as string)}
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="px-[24px] w-[238px] flex items-center gap-[14px]">
                    <img
                      src={profImage}
                      alt=""
                      className="w-[36px] h-[36px] rounded-full"
                    />
                    <div className="flex flex-col h-[40px] ">
                      <div>
                        <h6 className="inter font-[600] text-[14px] leading-[20px] text-[#222124]">
                          {events.instructor?.name}
                        </h6>
                      </div>
                      <div>
                        <p className="inter font-[400] text-[14px] leading-[20px] text-[#5F5F61]">
                          additional details
                        </p>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {!state.bookedEvents?.includes(events?._id as string) ? (
                    <Button
                      onClick={() => {
                        setUserId(events._id as string);
                        setModal(!modal);
                      }}
                    >
                      <h5 className="inter font-[600px] text-[14px] leading-[20px] text-[#222124]">
                        Book now
                      </h5>
                    </Button>
                  ) : (
                    <Button disabled>
                      <h5 className="inter font-[600px] text-[14px] leading-[20px] text-[#222124]">
                        Book now
                      </h5>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {modal && <Modal setModal={setModal} userId={userId} />}
        </Table>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default TableComponent;
