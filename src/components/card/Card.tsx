import { Component, JSX } from "solid-js";

type Props = {
  title?: string;
  subtitle?: string;
  children: JSX.Element;
  size: "xs" | "sm" | "md" | "lg" | "full";
};

const Card: Component<Props> = (props) => {
  return (
    <div
      class={`w-${props.size ?? "lg"} max-w-${props.size ?? "lg"}
      p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.subtitle}
      </p>
      {props.children}
    </div>
  );
};

export default Card;
