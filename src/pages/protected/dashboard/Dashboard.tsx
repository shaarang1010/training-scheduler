import { createResource, createSignal } from "solid-js";
import { CalendarView } from "../../../components/calendar/Calendar";

const Dashboard = () => {
  return (
    <div class="grid grid-cols-12 mt-48 gap-4">
      <div class="xl:invisible col-span-1">
        <div class="bg-gray-300 p-4">Sidebar Content</div>
      </div>

      <div class="col-span-11 xl:col-span-12">
        <CalendarView width={100} height={100} days={30} />
      </div>
    </div>
  );
};

export default Dashboard;
