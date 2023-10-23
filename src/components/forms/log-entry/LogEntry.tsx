import { Component, Setter, Accessor, For } from "solid-js";
import { Color, getColor } from "../../../types/color";
import { format } from "date-fns";

/**
 * Form event
 */

type FormProps = {
  eventName: Accessor<string>;
  setEventName: Setter<string>;
  eventDate: Accessor<string>;
  color: Accessor<Color>;
  setColor: Setter<Color>;
  tags: Accessor<string[]>;
  setTags: Setter<string[]>;
  comments: Accessor<string>;
  setComments: Setter<string>;
  onSaveHandler: () => void;
};

export const LogEntryForm: Component<FormProps> = (props) => {
  const colorOptions: Color[] = [
    "red",
    "green",
    "yellow",
    "orange",
    "blue",
    "none",
  ];

  return (
    <form class=" mx-12 my-24">
      <div class="mb-6">
        <label
          for="eventName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Name
        </label>
        <input
          id="eventName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.eventName()}
        />
      </div>
      <div class="mb-6">
        <label
          for="eventDate"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Date
        </label>
        <input
          type="text"
          id="eventDate"
          disabled
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={format(new Date(props.eventDate()), "dd-MM-yyyy")}
        />
      </div>

      <div class="mb-6">
        <label
          for="eventDate"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose color
        </label>
        <div class="flex flex-row">
          <For each={colorOptions}>
            {(color) => (
              <button
                type="button"
                class={`w-5 h-5 ${getColor(
                  color
                )} rounded-full mr-2 border-solid ${
                  props.color() === color && "ring-offset-2 ring"
                }`}
                onClick={() => props.setColor(color)}
              ></button>
            )}
          </For>
        </div>
      </div>
    </form>
  );
};
