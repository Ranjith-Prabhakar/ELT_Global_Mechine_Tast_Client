import { login } from "../../../../api/auth";
type TUserData = {
  email: string;
  password: string;
};


export async function validation({
  email,
  password,
}: TUserData) {
  try {
    console.log(name, email, password);
    let response = await login({ email, password });
    return response;
  } catch (error) {
    console.log(error);
  }
}
