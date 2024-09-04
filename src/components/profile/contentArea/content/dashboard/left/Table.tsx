import profImage from "../../../../../../assets/Profile/SideBar/images/profileImage.jpeg";
import { Button } from "../../../../../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../ui/table";

const invoices = [
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
  {
    courseName: "ui/ux",
    date: "03/09/2024",
    time: "6pm",
    profImage: profImage,
    instructorName: "Paid",
    details: "additional details",
  },
];

type Props = {};

const TableComponent = (props: Props) => {
  return (
    <Table className="bg-[#fff]">
      <TableHeader>
        <TableRow className="bg-[#F6F6F6] border-b-0">
          <TableHead className="w-[208px] h-[40px] px-[24px]">
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
        {invoices.map((invoice, index) => (
          <TableRow key={invoice.instructorName}>
            <TableCell className="w-[208px] h-[70px] border-b-[1px] border-t-0 border-[#E2E2E2] px-[24px]">
              <div className="flex items-center gap-3">
                <div className="h-[20px] w-[20px]">
                  <p className="w-[16px] h-[18px] font-[500] text-[14px] inter leading-[20px] text-center text-[#A1A0A3]">
                    {index + 1}
                  </p>
                </div>
                <div className="flex flex-col h-[40px] ">
                  <div>
                    <h6 className="inter font-[600] text-[14px] leading-[20px] text-[#222124]">
                      {invoice.courseName}
                    </h6>
                  </div>
                  <div>
                    <p className="inter font-[400] text-[14px] leading-[20px] text-[#5F5F61]">
                      {invoice.date}
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
                      {invoice.instructorName}
                    </h6>
                  </div>
                  <div>
                    <p className="inter font-[400] text-[14px] leading-[20px] text-[#5F5F61]">
                      {invoice.date}
                    </p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Button>
                <h5 className="inter font-[600px] text-[14px] leading-[20px] text-[#222124]">
                  Book now
                </h5>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
