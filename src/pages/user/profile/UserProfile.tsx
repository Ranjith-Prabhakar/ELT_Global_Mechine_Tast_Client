import ContentArea from "@/components/profile/contentArea";
import ProfileBoardSideBar from "@/components/profile/sidebar";
import { createContext, useContext, useEffect, useState } from "react";
import data from "../../../assets/Profile/SideBar/data/student.js";

type UserMenuSelectContextType = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  head: string;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  rowCount: number;
  setRowCount: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  bookedOnly: boolean;
  setBookedOnly: React.Dispatch<React.SetStateAction<boolean>>;
  events: TEvents | undefined;
  setEvents: React.Dispatch<React.SetStateAction<TEvents | undefined>>;
};

const UserMenuSelectContext = createContext<
  UserMenuSelectContextType | undefined
>(undefined);

export const useUserMenuSelectContext = (): UserMenuSelectContextType => {
  const context = useContext(UserMenuSelectContext);
  if (context === undefined) {
    throw new Error(
      "useUserMenuSelectContext must be used within a UserMenuSelectContext.Provider"
    );
  }
  return context;
};

export type TEvents = [
  {
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
  },
];

const UserProfile = () => {
  const [active, setActive] = useState(1);
  const [head, setHead] = useState("DashBoard");
  const [pageCount, setPageCount] = useState(1);
  const [rowCount, setRowCount] = useState(10);
  const [total, setTotal] = useState(0);
  const [bookedOnly, setBookedOnly] = useState(false);
  const [events, setEvents] = useState<TEvents>();

  useEffect(() => {
    setHead(data[active - 1].menuItem);
  }, [active]);

  return (
    <div className="bg-ETLBackground max-h-auto max-w-[100vw] flex">
      <UserMenuSelectContext.Provider
        value={{
          active,
          setActive,
          head,
          pageCount,
          setPageCount,
          rowCount,
          setRowCount,
          total,
          setTotal,
          bookedOnly,
          setBookedOnly,
          events,
          setEvents,
        }}
      >
        <ProfileBoardSideBar />
        <ContentArea />
      </UserMenuSelectContext.Provider>
    </div>
  );
};

export default UserProfile;
