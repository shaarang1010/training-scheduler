import { Component, For } from "solid-js";

type CalendarProps = {
  width: number;
  height: number;
  days: number;
};

export const CalendarView: Component<CalendarProps> = (props) => {
  return (
    <div class="grid mb-8 rounded-lg shadow-xs  dark:border-gray-700 md:mb-12 md:grid-cols-1 xl:grid-cols-7">
      <For each={Array(props.days).fill(1, 2, 30)}>
        {(day, index) => (
          <div
            class={`h-24 xl:h-48 flex flex-col border items-center justify-center text-center bg-white border-b border-gray-200  md:border-r dark:bg-gray-800 dark:border-gray-700`}
          >
            {day()}
          </div>
        )}
      </For>
    </div>
  );
};
