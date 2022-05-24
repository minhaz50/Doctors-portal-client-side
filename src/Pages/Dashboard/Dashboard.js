import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/userAdmin";

const Dashboard = () => {
  const [user] = useState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center mt-5">
        <h1 className="text-5xl">Dashboard</h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appoinments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Reviews</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All User</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
