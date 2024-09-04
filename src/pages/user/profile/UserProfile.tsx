import ContentArea from "@/components/profile/contentArea";
import ProfileBoardSideBar from "@/components/profile/sidebar";
import { createContext, useContext, useEffect, useState } from "react";
import data from "../../../assets/Profile/SideBar/data/student.js";

type UserMenuSelectContextType = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  head: string;
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

const UserProfile = () => {
  const [active, setActive] = useState(1);
  const [head, setHead] = useState("DashBoard");

  useEffect(() => {
    setHead(data[active - 1].menuItem);
  }, [active]);

  return (
    <div className="bg-ETLBackground max-h-auto max-w-[100vw] flex">
      <UserMenuSelectContext.Provider value={{ active, setActive, head }}>
        <ProfileBoardSideBar />
        <ContentArea />
      </UserMenuSelectContext.Provider>
    </div>
  );
};

export default UserProfile;
