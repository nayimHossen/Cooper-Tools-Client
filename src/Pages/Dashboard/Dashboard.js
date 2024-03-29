import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import PageTitle from "./../Shared/PageTitle";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="my-10 container mx-auto ">
      <PageTitle title="Dashboard"></PageTitle>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-5">
          <h2 className="text-3xl font-bold text-primary">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to="/dashboard">My Order</NavLink></li>
            {
              !admin && <>
                <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
              </>
            }
            <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
            {
              admin && <>
                <li><NavLink to="/dashboard/admin">Make Admin</NavLink></li>
                <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;
