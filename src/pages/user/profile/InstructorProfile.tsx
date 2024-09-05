import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { createEvent } from "../../../api/instructor";
import { useState } from "react";
import { logout } from "@/components/profile/sidebar/utils/logout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/user/userSlice";

const InstructorProfile = () => {
  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-ETLBackground ">
      <div className="w-[400px] h-[80vh] flex  flex-col gap-3 justify-center border bg-white shadow-md rounded-lg">
        <h2 className="text-center font-bold text-[20px] ">
          Schedule an event
        </h2>
        <div className="flex flex-col w-full p-[20px] gap-[10px]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Name">Course name</Label>
            <Input
              type="text"
              id="Name"
              placeholder="Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Date</Label>
            <Input
              type="date"
              id="email"
              placeholder="Email"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Time</Label>
            <Input
              type="time"
              id="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center">
            {" "}
            <Button
              variant={"auth"}
              className="w-full"
              onClick={async () => {
                let result = await createEvent({ courseName, date, time });
                if (result) {
                  setCourseName("");
                  setDate("");
                }
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </div>

          <div className="flex justify-center items-center">
            {" "}
            <Button
              variant={"auth"}
              className="w-full"
              onClick={() => {
                logout();
                dispatch(logoutUser());
                toast.success("Logout successfully");
                navigate("/login");
              }}
            >
              {" "}
              Logout{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
