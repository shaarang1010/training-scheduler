import { Component } from "solid-js";
import { useCalendarContext } from "../../context/calendar/CalendarContex";
import {
  FaSolidCircleChevronLeft,
  FaSolidCircleChevronRight,
} from "solid-icons/fa";

const CalendarNavigation = () => {
  const { currentDate, setCurrentMonth, setCurrentDate, currentMonth } =
    useCalendarContext();
  return (
    <div class="grid grid-cols-12 justify-start gap-2">
      <div class="col-span-4 lg:col-span-2 md:ml-8">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setCurrentMonth(currentMonth() - 1)}
        >
          <FaSolidCircleChevronLeft size={15} />
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setCurrentMonth(currentMonth() + 1)}
        >
          <FaSolidCircleChevronRight size={15} />
        </button>
      </div>
      <div class="col-span-6">
        <h3 class="text-3xl font-bold">
          {currentDate().toLocaleString("default", { month: "long" })}{" "}
          {currentDate().getFullYear()}
        </h3>
      </div>
    </div>
  );
};

export default CalendarNavigation;
