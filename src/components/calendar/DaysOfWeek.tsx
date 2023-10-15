import { For } from "solid-js";

export const DaysOfWeek = () => {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  return (
    <div class="grid grid-cols-7 bg-teal-100">
      <For each={daysOfWeek}>
        {(day) => (
          <div class="h-12 items-center justify-center text-center mt-2">
            {day + "day"}
          </div>
        )}
      </For>
    </div>
  );
};
