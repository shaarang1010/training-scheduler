import { createResource, createSignal } from "solid-js";
import { CalendarView } from "../../components/calendar/Calendar";

const Dashboard = () => {
  return <CalendarView width={24} height={24} days={30} />;
};

export default Dashboard;
