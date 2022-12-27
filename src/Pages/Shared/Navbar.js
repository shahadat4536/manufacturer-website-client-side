import React, { Children } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();
  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink className="mx-1 rounded-lg" to="/">
          Home
        </NavLink>
        <NavLink className="mx-1 rounded-lg" to="/all-parts">
          All Parts
        </NavLink>
        <NavLink className="mx-1 rounded-lg" to="/blog">
          Blog
        </NavLink>
        <NavLink className="mx-1 rounded-lg" to="/myportFolio">
          PortFolio
        </NavLink>
        {user && (
          <NavLink className="mx-1 rounded-lg" to="/dashboard">
            Dashboard
          </NavLink>
        )}
        {user ? (
          <button onClick={logout} class="btn btn-ghost rounded-lg">
            Sign Out
          </button>
        ) : (
          <NavLink className="rounded-lg" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    // <div class="navbar bg-base-300 sticky">
    //   <div class="navbar-start">
    //     <div class="dropdown">
    //       <label tabindex="0" class="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabindex="0"
    //         class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {menuItems}
    //       </ul>
    //     </div>

    //     <a class="btn btn-ghost normal-case text-xl">Crypto Computer</a>
    //   </div>

    //   <div class="navbar-end hidden lg:flex">
    //     <ul class="menu menu-horizontal p-0">{menuItems}</ul>
    //   </div>

    //   <div className="navbar-end lg:hidden">
    //     <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost ">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         class="h-5 w-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M4 6h16M4 12h8m-8 6h16"
    //         />
    //       </svg>
    //     </label>
    //   </div>
    // </div>
    // ////////////////////////////////////////////////
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar ">
          {pathname.includes("dashboard") && (
            <div className="lg:hidden">
              <label
                tabindex="1"
                for="dashboard-sidebar"
                class="btn btn-ghost "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          )}
          <Link
            to="home"
            class="flex-1 px-2 mx-2 text-3xl font-semibold hover:text-violet-700"
          >
            Crypto Computer
          </Link>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menuItems}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
