import { Outlet, useNavigate } from "@solidjs/router";
import { NavigationBar } from "../../components/navbar/NavigationBar";
import { createEffect } from "solid-js";

const ProtectedContent = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  createEffect(() => {
    console.log("token===>", token);
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default ProtectedContent;
