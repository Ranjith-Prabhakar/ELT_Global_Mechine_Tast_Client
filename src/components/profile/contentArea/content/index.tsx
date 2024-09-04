import { useUserMenuSelectContext } from "@/pages/user/profile/UserProfile";
import DashBoard from "./dashboard";

type Props = {};

const Content = (props: Props) => {
  const { head } = useUserMenuSelectContext();
  return (
    <div className="w-[1128.5px] h-[950px] p-3">
      {head === "Dash Board" ? (
        <DashBoard />
      ) : (
        <div className="flex w-[80vw] h-[80vh] justify-center items-center">
          <h1 className="text-[80px] font-bold">Page is Under maintanence</h1>
        </div>
      )}
    </div>
  );
};

export default Content;
