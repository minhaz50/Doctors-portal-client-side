import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllUserRow from "./AllUserRow";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
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
    <div>
      <h1 className="text-2xl">All users are here {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <AllUserRow key={user._id} user={user}></AllUserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
