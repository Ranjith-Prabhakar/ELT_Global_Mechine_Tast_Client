import Header from "./Header";
import Pagination from "./Pagination";
import TableComponent from "./Table";


const LeftPortion = () => {
  return (
    <div className="w-[670px] h-full flex flex-col  gap-[20px]   ">
      <div className="h-[823px] w-[630px] p-[18px] bg-[#FFFFFF] rounded-[12px] border-[.5px] border-[#0000000D] border-opacity-10 shadow-custom">
        <div className="w-full flex flex-col gap-4 ">
          <Header />
          <TableComponent />
        </div>
      </div>
      <div className="h-[64px] w-[606px">
        <Pagination />
      </div>
    </div>
  );
};

export default LeftPortion;
