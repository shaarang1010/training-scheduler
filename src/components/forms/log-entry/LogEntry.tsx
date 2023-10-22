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
    <div class="grid grid-cols-12 gap-4 mx-12 my-24">
      <div class="col-span-12 md:col-span-6">
        <form class=" mx-6">
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
                  <span
                    class={`w-5 h-5 ${getColor(
                      color
                    )} rounded-full mr-2 border-solid}`}
                    onClick={props.setColor}
                  ></span>
                )}
              </For>
            </div>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
