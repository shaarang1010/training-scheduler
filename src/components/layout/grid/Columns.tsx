import { JSX, Component } from "solid-js";

type ColumnProps = {
  children: JSX.Element;
  span: number;
  classes?: string;
};

export const GridCol: Component<ColumnProps> = (props) => {
  return (
    <div class={`col-span-${props.span} ${props.classes ? props.classes : ""}`}>
      {props.children}
    </div>
  );
};
