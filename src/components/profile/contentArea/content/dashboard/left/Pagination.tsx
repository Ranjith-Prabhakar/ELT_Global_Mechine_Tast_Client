import { Button } from "@/components/ui/button";
import chevronLeft from "../../../../../../assets/Profile/pagination/cheveron-left.png";
import chevronRight from "../../../../../../assets/Profile/pagination/cheveron-right.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchEvents } from "@/api/user";
import { useUserMenuSelectContext } from "@/pages/user/profile/UserProfile";
import { useEffect, useState } from "react";
import localStorageForTotalPage from "@/utils/localStorageForTotalPage";

const Pagination = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  const [numberButtons, setNumberButtons] = useState<number[]>([]);

  const {
    bookedOnly,
    rowCount,
    setRowCount,
    setEvents,
    setTotal,
    total,
    pageCount,
    setPageCount,
  } = useUserMenuSelectContext();

  useEffect(() => {
    async function fetchEventsApi() {
      let response = await fetchEvents({
        rowCount: rowCount,
        pageCount: 1,
        total: 0,
        bookedOnly,
      });
      let total = localStorageForTotalPage();
      setTotal(total);
      setEvents(response);
    }
    fetchEventsApi();
  }, [rowCount]);

  useEffect(() => {
    let start = pageCount * rowCount - rowCount + 1;
    let end = pageCount * rowCount;
    let totalPages = Math.ceil(total / rowCount); // Calculate the number of pages
    setStart(start);
    setEnd(end);

    // Generate array of page numbers
    let newArr = Array.from({ length: totalPages }, (_, index) => index + 1);
    setNumberButtons(newArr); // Set array of page numbers
  }, [rowCount, pageCount, bookedOnly, total]);

  const renderButtons = () => {
    if (numberButtons.length <= 6) {
      // If there are 6 or fewer pages, show all buttons
      return numberButtons.map((number) => (
        <Button
          key={number}
          className={`w-[33px] h-[36px] rounded-[4px] border py-[8px] px-[12px] ${
            pageCount === number ? "bg-gray-200" : "bg-white"
          } border-[#E9E9E9] flex gap-[4px]`}
          onClick={async () => {
            let response = await fetchEvents({
              rowCount,
              pageCount: number,
              total,
              bookedOnly,
            });
            setEvents(response);
            setPageCount(number);
          }}
        >
          <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
            {number}
          </h3>
        </Button>
      ));
    } else {
      // More than 6 pages: Show first 4, ellipsis, last page
      const firstFour = numberButtons.slice(0, 4);
      const lastPage = numberButtons[numberButtons.length - 1];

      return (
        <>
          {firstFour.map((number) => (
            <Button
              key={number}
              className={`w-[33px] h-[36px] rounded-[4px] border py-[8px] px-[12px] ${
                pageCount === number ? "bg-gray-200" : "bg-white"
              } border-[#E9E9E9] flex gap-[4px]`}
              onClick={async () => {
                let response = await fetchEvents({
                  rowCount,
                  pageCount: number,
                  total,
                  bookedOnly,
                });
                setEvents(response);
                setPageCount(number);
              }}
            >
              <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
                {number}
              </h3>
            </Button>
          ))}

          {/* Ellipsis */}
          <span className="w-[33px] h-[36px] flex justify-center items-center">
            ...
          </span>

          {/* Last page */}
          <Button
            key={lastPage}
            className={`w-[33px] h-[36px] rounded-[4px] border py-[8px] px-[12px] ${
              pageCount === lastPage ? "bg-gray-200" : "bg-white"
            } border-[#E9E9E9] flex gap-[4px]`}
            onClick={async () => {
              let response = await fetchEvents({
                rowCount,
                pageCount: lastPage,
                total,
                bookedOnly,
              });
              setEvents(response);
              setPageCount(lastPage);
            }}
          >
            <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
              {lastPage}
            </h3>
          </Button>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between h-[36px]">
        <div className="w-[436px] flex justify-between gap-1 max-w-[400px]">
          {/* First button */}
          <Button
            className="w-[77px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]"
            onClick={async () => {
              if (pageCount > 1) {
                let response = await fetchEvents({
                  rowCount,
                  pageCount: pageCount - 1,
                  total,
                  bookedOnly,
                });
                let totalEvent = localStorageForTotalPage();
                setTotal(totalEvent);
                setEvents(response);
                setPageCount((prev) => prev - 1);
              }
            }}
          >
            <img
              src={chevronLeft}
              alt="left-arrow"
              width="16px"
              height="16px"
            />
            <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
              Back
            </h3>
          </Button>

          {/* Pagination buttons */}
          <div className="flex-1 flex gap-2 max-w-[200px]">
            {renderButtons()}
          </div>

          {/* Next button */}
          <Button
            className="w-[77px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]"
            onClick={async () => {
              if (total > end) {
                let response = await fetchEvents({
                  rowCount,
                  pageCount: pageCount + 1,
                  total,
                  bookedOnly,
                });
                let totalEvent = localStorageForTotalPage();
                setTotal(totalEvent);
                setEvents(response);
                setPageCount((prev) => prev + 1);
              }
            }}
          >
            <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
              Next
            </h3>
            <img
              src={chevronRight}
              alt="right-arrow"
              width="16px"
              height="16px"
            />
          </Button>
        </div>

        {/* Last section */}
        <div className="w-[176px] flex justify-between items-center translate-x-[-20px]">
          <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#000000]">
            Result per page
          </h3>

          <Select onValueChange={(value) => setRowCount(+value)}>
            <SelectTrigger className="w-[64px] h-[36px] bg-white">
              <SelectValue placeholder={10} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-2 ps-[3px]">
        <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
          {start}-{end} of {total}
        </h3>
      </div>
    </div>
  );
};

export default Pagination;
