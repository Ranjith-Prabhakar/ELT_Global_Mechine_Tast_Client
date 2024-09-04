import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className=" w-[400px] h-[80vh] flex  flex-col gap-3  rounded-md border">
        <h2 className="text-center font-bold text-[20px] ">Login</h2>
        <div className="flex flex-col w-full p-[20px] gap-[10px]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="flex justify-center items-center">
            {" "}
            <Button variant={"auth"}> Submit </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
