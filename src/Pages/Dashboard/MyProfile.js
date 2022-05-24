import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <h2>MyProfile</h2>
      <p className="text-4xl">Name:{user?.displayName}</p>
      <p>Email:{user?.email}</p>
    </div>
  );
};

export default MyProfile;
