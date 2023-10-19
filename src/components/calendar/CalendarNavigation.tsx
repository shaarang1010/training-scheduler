import { Component } from "solid-js";
import { useCalendarContext } from "../../context/calendar/CalendarContex";
import {
  FaSolidCircleChevronLeft,
  FaSolidCircleChevronRight,
} from "solid-icons/fa";
import { getCalendarMonthName } from "../../utils/calendar";

const CalendarNavigation = () => {
  const {
    currentDate,
    setCurrentMonth,
    currentMonth,
    setCurrentYear,
    currentYear,
  } = useCalendarContext();

  const incrementMonth = () => {
    if (currentMonth() === 11 && currentYear() === new Date().getFullYear()) {
      setCurrentMonth(0);
      setCurrentYear(currentYear() + 1);
    } else {
      setCurrentMonth(currentMonth() + 1);
    }
  };

  const decrementMonth = () => {
    if (currentMonth() === 0 && currentYear() === new Date().getFullYear()) {
      setCurrentYear(currentYear() - 1);
    } else {
      setCurrentMonth(currentMonth() - 1);
    }
  };
  return (
    <div class="grid grid-cols-12 justify-start gap-2">
      <div class="col-span-4 lg:col-span-2 md:ml-8">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={decrementMonth}
        >
          <FaSolidCircleChevronLeft size={15} />
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={incrementMonth}
        >
          <FaSolidCircleChevronRight size={15} />
        </button>
      </div>
      <div class="col-span-6">
        <h3 class="text-3xl font-bold">
          {getCalendarMonthName(currentMonth() + 1)}-{currentYear()}
        </h3>
      </div>
    </div>
  );
};

export default CalendarNavigation;
