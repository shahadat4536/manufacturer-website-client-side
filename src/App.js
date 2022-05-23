import { Route, Routes } from "react-router-dom";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Review from "./Pages/Dashboard/Review";
import BuyParts from "./Pages/Home/BuyParts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LogIn/Login";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import SignUp from "./Pages/LogIn/SignUp";
import Blogs from "./Pages/Shared/Blogs";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="px-4 ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route
          path="/parts/:id"
          element={
            <RequireAuth>
              <BuyParts></BuyParts>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
