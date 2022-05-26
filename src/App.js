import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProducts from "./Pages/Dashboard/AddProducts";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import Review from "./Pages/Dashboard/Review";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import BuyParts from "./Pages/Home/BuyParts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LogIn/Login";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import SignUp from "./Pages/LogIn/SignUp";
import MyPortFolio from "./Pages/MyPortFolio";
import Blogs from "./Pages/Shared/Blogs";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  //   <Navbar>
  //   <Routes>
  //     <Route path="/" element={<Home></Home>}></Route>
  //     <Route path="/home" element={<Home></Home>}></Route>
  //     <Route path="/blogs" element={<Blogs></Blogs>}></Route>
  //     <Route
  //       path="/myportFolio"
  //       element={<MyPortFolio></MyPortFolio>}
  //     ></Route>
  //     <Route
  //       path="dashboard"
  //       element={
  //         <RequireAuth>
  //           <Dashboard></Dashboard>
  //         </RequireAuth>
  //       }
  //     >
  //       <Route index element={<MyOrder></MyOrder>}></Route>
  //       <Route path="review" element={<Review></Review>}></Route>
  //       <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
  //       <Route
  //         path="updateprofile"
  //         element={<UpdateProfile></UpdateProfile>}
  //       ></Route>
  //       <Route path="payment/:id" element={<Payment></Payment>}></Route>
  //       <Route
  //         path="users"
  //         element={
  //           <RequireAdmin>
  //             <AllUsers></AllUsers>
  //           </RequireAdmin>
  //         }
  //       ></Route>
  //       <Route
  //         path="addproducts"
  //         element={
  //           <RequireAdmin>
  //             <AddProducts></AddProducts>
  //           </RequireAdmin>
  //         }
  //       ></Route>
  //       <Route
  //         path="manageproducts"
  //         element={
  //           <RequireAdmin>
  //             <ManageProducts></ManageProducts>
  //           </RequireAdmin>
  //         }
  //       ></Route>
  //       <Route
  //         path="manageallorder"
  //         element={
  //           <RequireAdmin>
  //             <ManageAllOrder></ManageAllOrder>
  //           </RequireAdmin>
  //         }
  //       ></Route>
  //     </Route>
  //     <Route
  //       path="/parts/:id"
  //       element={
  //         <RequireAuth>
  //           <BuyParts></BuyParts>
  //         </RequireAuth>
  //       }
  //     ></Route>
  //     <Route path="/signup" element={<SignUp></SignUp>}></Route>
  //     <Route path="/login" element={<Login></Login>}></Route>
  //     <Route path="*" element={<NotFound></NotFound>}></Route>
  //   </Routes>
  // </Navbar>

  return (
    <div className="px-4 ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myportFolio"
          element={<MyPortFolio></MyPortFolio>}
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="updateprofile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproducts"
            element={
              <RequireAdmin>
                <AddProducts></AddProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageallorder"
            element={
              <RequireAdmin>
                <ManageAllOrder></ManageAllOrder>
              </RequireAdmin>
            }
          ></Route>
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
