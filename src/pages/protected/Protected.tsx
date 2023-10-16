import { NavigationBar } from "../../components/navbar/NavigationBar";
import { CalendarProvider } from "../../context/calendar/CalendarContex";
import Dashboard from "./dashboard/Dashboard";

const ProtectedContent = () => {
  return (
    <div>
      <CalendarProvider>
        <NavigationBar />
        <Dashboard />
      </CalendarProvider>
    </div>
  );
};

export default ProtectedContent;
