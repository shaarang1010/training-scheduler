import { Component } from "solid-js";

type DropdownProps = {
  text: string;
  options: Record<string, string>[];
  selected: string[];
  onChangeHandler: (val: string) => void;
};
export const Dropdown: Component<DropdownProps> = (props) => {
  return (
    <>
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        class="text-black bg-slate-50 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-slate-300 dark:focus:ring-slate-400 border border-gray-300"
        type="button"
      >
        {props.text}
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownBgHover"
        class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <ul
          class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownBgHoverButton"
        >
          {props.options.map((option, index) => (
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id={`checkbox-item-${index}`}
                  type="checkbox"
                  value={option.key}
                  checked={props.selected.includes(option.key)}
                  onChange={() => props.onChangeHandler(option.key)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="checkbox-item-4"
                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  {option.value}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
