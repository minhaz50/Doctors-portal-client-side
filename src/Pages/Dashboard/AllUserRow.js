import React from "react";

const AllUserRow = ({ user }) => {
  const { email } = user;
  return (
    <tr>
      <th></th>
      <td>{user.email}</td>
      <td>
        <button class="btn btn-xs">Make Admin</button>
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default AllUserRow;
