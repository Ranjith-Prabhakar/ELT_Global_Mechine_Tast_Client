import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validation } from "./util/validation";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();
  

  const handleValueChange = (value:any) => {
    setSelectedRole(value);
    console.log("Selected role:", value); // This will log the selected value
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className=" w-[400px] h-[80vh] flex  flex-col gap-3  rounded-md border">
        <h2 className="text-center font-bold text-[20px] ">Sign Up</h2>
        <div className="flex flex-col w-full p-[20px] gap-[10px]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Name">Name</Label>
            <Input
              type="text"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <RadioGroup
            defaultValue={selectedRole}
            onValueChange={handleValueChange}
            className="flex items-center gap-9"
          >
            <h1 className="font-bold">Choose your role:</h1>
            <div className="flex justify-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="r1" />
                <Label htmlFor="r1">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="instructor" id="r2" />
                <Label htmlFor="r2">Instructor</Label>
              </div>
            </div>
          </RadioGroup>

          <div className="flex justify-center items-center">
            {" "}
            <Button
              variant={"auth"}
              onClick={async () => {
                let result = await validation({
                  name,
                  email,
                  password,
                  confirmPassword,
                  selectedRole,
                });
                if (result) {
                  navigate("/login");
                }
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
