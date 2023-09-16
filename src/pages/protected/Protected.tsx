import { NavigationBar } from "../../components/navbar/NavigationBar";
import Dashboard from "./dashboard/Dashboard";

const ProtectedContent = () => {
  return (
    <div>
      <NavigationBar />
      <Dashboard />
    </div>
  );
};

export default ProtectedContent;
