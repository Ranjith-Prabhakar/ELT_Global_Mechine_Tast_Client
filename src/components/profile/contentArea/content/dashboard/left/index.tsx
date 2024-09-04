import Header from "./Header";
import TableComponent from "./Table";

type Props = {};

const LeftPortion = (props: Props) => {
  return (
    <div className="w-[642px] h-full flex flex-col justify-between ">
      <div className="h-[829px] w-[606px] p-[18px] bg-[#FFFFFF] rounded-[12px] border-[.5px] border-[#0000000D] border-opacity-10 shadow-custom">
        <div className="w-full flex flex-col gap-4">
          <Header />
          <TableComponent />
        </div>
      </div>
      <div className="h-[64px] w-[606px] bg-sky-800">pagination</div>
    </div>
  );
};

export default LeftPortion;
