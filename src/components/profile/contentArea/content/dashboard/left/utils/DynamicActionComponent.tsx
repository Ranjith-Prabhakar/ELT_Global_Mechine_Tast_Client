import { Button } from "@/components/ui/button";
import { TUser } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";
import calculateDaysTo from "./DayCalculator";
import TimerComponent from "./TimeCounter";

type Tevents = {
  courseName?: string;
  createdAt?: string;
  date?: string;
  instructor?: {
    email: string;
    name: string;
    selectedRole?: string;
    _id?: string;
  };
  updatedAt?: string;
  _id?: string;
};
type Props = {
  time: string;
  date: string;
  setUserId: (value: React.SetStateAction<string>) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  events: Tevents;
  modal: boolean;
};

const DynamicActionComponent = ({
  time,
  date,
  setUserId,
  setModal,
  events,
  modal,
}: Props) => {
  const state = useSelector((state: { user: TUser }) => state.user);

  if (!state.bookedEvents?.includes(events?._id as string)) {
    return (
      <>
        {calculateDaysTo(date) < 4 && calculateDaysTo(date) > 1 ? (
          <Button
            onClick={() => {
              setUserId(events._id as string);
              setModal(!modal);
            }}
          >
            <h5 className="inter font-[600px] text-[14px] leading-[20px] text-[#222124]">
              3 days to go
            </h5>
          </Button>
        ) : calculateDaysTo(date) > 4 ? (
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
          <TimerComponent targetTime={time} />
        )}
      </>
    );
  } else {
    return (
      <>
        {calculateDaysTo(date) < 4 && calculateDaysTo(date) > 1 ? (
          <Button
            onClick={() => {
              setUserId(events._id as string);
              setModal(!modal);
            }}
          >
            <h5 className="inter font-[600px] text-[14px] leading-[20px] text-[#222124]">
              3 days to go
            </h5>
          </Button>
        ) : calculateDaysTo(date) > 4 ? (
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
      </>
    );
  }
};

export default DynamicActionComponent;
