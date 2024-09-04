import Login from "./pages/auth/Login/Login";
import Signup from "./pages/auth/SignUp/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/user/profile";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
