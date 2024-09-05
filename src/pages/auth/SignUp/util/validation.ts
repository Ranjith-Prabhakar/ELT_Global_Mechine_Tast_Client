import { Dispatch, UnknownAction } from "redux";
import { signUp } from "../../../../api/auth";
type TUserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  selectedRole: string;
  
};

type Tdata = {
  message: string;
  status: string;
};
export async function validation({
  name,
  email,
  password,
  confirmPassword,
  selectedRole,
}: TUserData) {
  try {
    let response = await signUp({ name, email, password, selectedRole });
    return response;
  } catch (error) {
    console.log(error);
  }
}
