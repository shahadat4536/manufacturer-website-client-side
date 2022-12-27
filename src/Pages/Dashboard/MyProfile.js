import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const url = `https://manufacturer-website-server-side-amb7.onrender.com/user/${user.email}`;
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery(["userData", user.email], () =>
    fetch(url, {
      method: "GET",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        {/*  */}
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">{user.displayName}</h1>
              <Link className="btn btn-xs mt-2" to="/dashboard/updateprofile">
                Update Profile
              </Link>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <p className="text-2xl">
                  Email-
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <p className="text-2xl">Education-{userData.education}</p>
                <p className="text-2xl">Location-{userData.location}</p>
                <p className="text-2xl">
                  Phone-
                  <a href={`tel:${userData.phone}`}>{userData.phone}</a>
                </p>
                <p className="text-2xl">Linkedin-{userData.linkedin}</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyProfile;
