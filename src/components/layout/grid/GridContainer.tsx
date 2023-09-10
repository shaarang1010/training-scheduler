import { JSX } from "solid-js";
import { Component } from "solid-js";

type GridProps = {
  columns: number;
  children: JSX.Element;
  gap?: number;
  justify?: "start" | "end" | "center";
  classes?: string;
};

export const GridContainer: Component<GridProps> = (props) => {
  return (
    <div
      class={`grid grid-cols-${props.columns} ${
        props.gap ? `gap-${props.gap}` : ""
      } ${props.justify ? `justify-items-${props.justify}` : ""} ${
        props.classes ? props.classes : ""
      }`}
    >
      {props.children}
    </div>
  );
};
