import Profile from "./pages/user/profile";
import { BrowserRouter } from "react-router-dom";
type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </div>
  );
};

export default App;
