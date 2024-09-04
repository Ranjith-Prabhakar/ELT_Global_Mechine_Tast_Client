import { signUp } from "../../../../api/auth";
type TUserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
}: TUserData) {
  try {
    console.log(name, email, password, confirmPassword);
    let response = await signUp({ name, email, password });
    console.log("--- validation", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
