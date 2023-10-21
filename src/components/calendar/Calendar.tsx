import { Component, For, createEffect, createSignal } from "solid-js";
import { getAllDatesForMonth } from "../../utils/calendar";
import { CalendarDate } from "../../types/calendar-types";
import { createStore } from "solid-js/store";
import { useCalendarContext } from "../../context/calendar/CalendarContex";
import { isToday } from "date-fns";
import { A } from "@solidjs/router";

type CalendarProps = {
  width: number;
  height: number;
  month: number;
  year: number;
};

export const CalendarView: Component<CalendarProps> = (props) => {
  const [calendarDates, setCalendarDates] = createStore<CalendarDate[]>([]);

  createEffect(() => {
    const dates = getAllDatesForMonth(props.year, props.month);
    setCalendarDates([...dates]);
  });
  return (
    <div class="grid mb-8 rounded-lg dark:border-gray-700 md:mb-12 grid-cols-7 xl:grid-cols-7 xl:grid-rows-5">
      <For each={calendarDates}>
        {(cd) => (
          <A href={`/log-entry/${cd.date}`}>
            <div
              class={`h-24 xl:h-48 border items-center justify-center text-center bg-white border-b border-gray-100  md:border-r dark:bg-gray-800 dark:border-gray-700 box-shadow-md rounded-md hover:drop-shadow-xl cursor-pointer`}
            >
              <p class="text-sm lg:text-md mt-4">
                {cd.dayOfWeek && cd.date && isToday(new Date(cd.date)) ? (
                  <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    {cd.day} - {cd.dayOfWeek.substring(0, 3)}
                  </span>
                ) : cd.dayOfWeek ? (
                  `${cd.day} - ${cd.dayOfWeek.substring(0, 3)}`
                ) : null}
              </p>
            </div>
          </A>
        )}
      </For>
    </div>
  );
};
