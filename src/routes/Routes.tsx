import { Route, Routes } from "@solidjs/router";
import LoginPage from "../pages/login/LoginPage";
import ProtectedContent from "../pages/protected/Protected";
import LogEntryPage from "../pages/logentry/LogEntry";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={LoginPage} />
      <Route path="/dashboard" component={ProtectedContent} />
      <Route path="/log-entry" component={LogEntryPage} />
    </Routes>
  );
};
