import { Outlet } from "react-router-dom";
import Sidbar from "./Sidbar";

const Admin = () => {
  return (
    <div className="flex">
      <div className="bg-green-400  flex-[1] min-h-screen">
        <Sidbar></Sidbar>
      </div>
      <div className="flex-[3]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
