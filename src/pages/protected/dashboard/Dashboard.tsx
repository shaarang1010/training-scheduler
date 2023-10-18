import { createResource, createSignal } from "solid-js";
import { CalendarView } from "../../../components/calendar/Calendar";
import { DaysOfWeek } from "../../../components/calendar/DaysOfWeek";
import { useCalendarContext } from "../../../context/calendar/CalendarContex";
import CalendarNavigation from "../../../components/calendar/CalendarNavigation";

const Dashboard = () => {
  const { currentDate, currentMonth } = useCalendarContext();

  return (
    <div class="grid grid-cols-12 gap-4 mt-24">
      <div class="col-span-12">
        <CalendarNavigation />
      </div>

      <div class="col-span-12 xl:col-span-12">
        <CalendarView
          width={100}
          height={100}
          month={currentMonth() + 1}
          year={currentDate().getFullYear()}
        />
      </div>
    </div>
  );
};

export default Dashboard;
