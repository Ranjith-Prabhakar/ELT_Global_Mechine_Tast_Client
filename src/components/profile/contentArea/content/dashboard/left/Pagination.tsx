import { Button } from "@/components/ui/button";
import chevronLeft from "../../../../../../assets/Profile/pagination/cheveron-left.png";
import chevronRight from "../../../../../../assets/Profile/pagination/cheveron-right.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between  h-[36px]">
        <div className="w-[436px] flex justify-between gap-1 max-w-[400px]">
          {/* first button */}
          <Button className="w-[77px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]">
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
          {/* ------second section--------- */}
          <div className="flex-1 flex gap-2 max-w-[200px] ">
            <Button className="w-[33px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]">
              <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
                1
              </h3>
            </Button>

            <Button className="w-[33px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]">
              <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#313131]">
                2
              </h3>
            </Button>
          </div>
          {/* ------------------- */}
          <Button className="w-[77px] h-[36px] rounded-[4px] border py-[8px] px-[12px] border-[#E9E9E9] bg-white flex gap-[4px]">
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
        {/* last button */}
        <div className="w-[176px] flex justify-between items-center translate-x-[-20px]">
          <h3 className="inter font-[400] text-[14px] leading-[20px] text-[#000000]">
            Result per page
          </h3>

          <Select>
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
          {1}-{10} of {150}
        </h3>
      </div>
    </div>
  );
};

export default Pagination;
