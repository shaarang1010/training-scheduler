import { createResource, createSignal } from "solid-js";
import { CalendarView } from "../../../components/calendar/Calendar";
import { DaysOfWeek } from "../../../components/calendar/DaysOfWeek";

const Dashboard = () => {
  return (
    <div class="grid grid-cols-12 mt-48 gap-4">
      <div class="invisible xl:visible col-span-12">
        <DaysOfWeek />
      </div>

      <div class="col-span-12 xl:col-span-12">
        <CalendarView width={100} height={100} month={10} year={2023} />
      </div>
    </div>
  );
};

export default Dashboard;
