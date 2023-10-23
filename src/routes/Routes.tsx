import { Route, Routes, Navigate } from "@solidjs/router";
import LoginPage from "../pages/login/LoginPage";
import ProtectedContent from "../pages/protected/Protected";
import LogEntryPage from "../pages/logentry/LogEntry";
import Dashboard from "../pages/protected/dashboard/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={ProtectedContent}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/log-entry/:id" component={LogEntryPage} />
      </Route>
    </Routes>
  );
};
