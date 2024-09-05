import { signUp } from "../../../../api/auth";
type TUserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  selectedRole: string;
  
};


export async function validation({
  name,
  email,
  password,
  selectedRole,
}: TUserData) {
  try {
    let response = await signUp({ name, email, password, selectedRole });
    return response;
  } catch (error) {
    console.log(error);
  }
}
