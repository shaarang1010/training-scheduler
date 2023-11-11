import { Component, Setter, Accessor, For, createSignal } from "solid-js";
import { Color, getColor } from "../../../types/color";
import { format } from "date-fns";
import { activityTags } from "../../../types/tags";
import { Dropdown } from "../../dropdown/Dropdown";

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

  const [selectedTags, setSelectedTags] = createSignal<string[]>([]);

  const onChangeHandler = (val: string) => {
    console.log(val);
    if (selectedTags().includes(val)) {
      setSelectedTags(selectedTags().filter((tag) => tag !== val));
    } else {
      setSelectedTags([...selectedTags(), val]);
    }
  };

  return (
    <form class=" mx-12 my-24">
      <div class="mb-6">
        <label
          for="eventName"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Event Name
        </label>
        <input
          id="eventName"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.eventName()}
        />
      </div>
      <div class="mb-6">
        <label
          for="eventDate"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Event Date
        </label>
        <input
          type="text"
          id="eventDate"
          disabled
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={format(new Date(props.eventDate()), "dd-MM-yyyy")}
        />
      </div>
      <div class="mb-6">
        <label
          for="activityStats"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Activity stats
        </label>
        <dl class="flex flex-col text-gray-900  dark:text-white justify-start">
          <div class="flex flex-row items-center">
            <dt class="mb-2 text-xl font-extrabold mr-4">21.1KM</dt>
            <dd class="text-gray-500 dark:text-gray-400">Distance covered</dd>
          </div>

          <div class="flex flex-row items-center">
            <dt class="mb-2 text-xl font-extrabold mr-4">4:24/km</dt>
            <dd class="text-gray-500 dark:text-gray-400">Pace</dd>
          </div>
        </dl>
      </div>
      <div class="mb-6">
        <label
          for="color"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Choose Color
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
      <div class="mb-6">
        <label
          for="color"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Tags
        </label>
        <Dropdown
          text="Add tags"
          options={activityTags}
          selected={selectedTags()}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div class="mb-6">
        <label
          for="comments"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Additional comments/insghts
        </label>
        <textarea
          id="comments"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div class="flex flex-col md:flex-row justify-start mt-8">
        <button
          type="button"
          class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => console.log(selectedTags())}
        >
          Save
        </button>
        <button
          type="button"
          class="md:ml-8 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
