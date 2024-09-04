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
    console.log(name, email, password, confirmPassword, selectedRole);
    let response = await signUp({ name, email, password, selectedRole });
    console.log("--- validation", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
