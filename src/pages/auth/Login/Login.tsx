import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { validation } from "./utils/validation";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "../../../redux/features/user/userSlice";
type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className=" w-[400px] h-[80vh] flex  flex-col gap-3  rounded-md border">
        <h2 className="text-center font-bold text-[20px] ">Login</h2>
        <div className="flex flex-col w-full p-[20px] gap-[10px]">
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

          <div className="flex  flex-col gap-7 justify-center items-center">
            {" "}
            <Button
              variant={"auth"}
              onClick={async () => {
                let result = await validation({ email, password });
                console.log("response", result);
                if (result) {
                  dispatch(loadUser({ payload: result }));
                  navigate("/profile");
                }
              }}
            >
              {" "}
              Submit{" "}
            </Button>
            <Link to="/sign-up">Don`t have an account ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
