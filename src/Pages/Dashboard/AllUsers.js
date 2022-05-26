import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersData from "./UsersData";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://stark-cliffs-55109.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table table-normal lg:w-full ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UsersData
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            ></UsersData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
