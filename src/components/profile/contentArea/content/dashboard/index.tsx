import LeftPortion from "./left";
import RightPortion from "./right";


const DashBoard = () => {
  return (
    <div className="flex h-full ">
      <LeftPortion />
      <RightPortion />
    </div>
  );
};

export default DashBoard;
