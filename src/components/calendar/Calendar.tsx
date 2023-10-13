import { Component, For, createEffect } from "solid-js";
import { getAllDatesForMonth } from "../../utils/calendar";
import { CalendarDate } from "../../types/calendar-types";
import { createStore } from "solid-js/store";

type CalendarProps = {
  width: number;
  height: number;
  days: number;
};

export const CalendarView: Component<CalendarProps> = (props) => {
  const [calendarDates, setCalendarDates] = createStore<CalendarDate[]>([]);

  createEffect(() => {
    const dates = getAllDatesForMonth(2023, 11);
    setCalendarDates([...getAllDatesForMonth(2023, 10)]);
  });
  return (
    <div class="grid mb-8  rounded-lg shadow-xs  dark:border-gray-700 md:mb-12 md:grid-cols-1 xl:grid-cols-7 xl:grid-rows-5">
      <For each={calendarDates}>
        {(cd, index) => (
          <div
            class={`h-24 xl:h-48 border items-center justify-center text-center bg-white border-b border-gray-200  md:border-r dark:bg-gray-800 dark:border-gray-700`}
          >
            {cd.day} - {cd.dayOfWeek}
          </div>
        )}
      </For>
    </div>
  );
};
