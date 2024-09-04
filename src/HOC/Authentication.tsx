import useGetUser from "../hooks/useGetUser";
import { ComponentType } from "react";

type Props = {
  wrapperComponent: ComponentType;
};

const HOCAuthentication = ({ wrapperComponent: WrapperComponent }: Props) => {
  return function HOC() {
    const user = useGetUser();

    if (user.selectedRole === "user") {
      return <WrapperComponent />;
    } else if (user.selectedRole === "instructor") {
    }
  };
};

export default HOCAuthentication;
