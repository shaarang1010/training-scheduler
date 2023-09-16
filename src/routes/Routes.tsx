import { Route, Routes } from "@solidjs/router";
import LoginPage from "../pages/login/LoginPage";
import ProtectedContent from "../pages/protected/Protected";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={LoginPage} />
      <Route path="/dashboard" component={ProtectedContent} />
    </Routes>
  );
};
