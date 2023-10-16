import {
  createSignal,
  createContext,
  useContext,
  Component,
  JSX,
  createEffect,
  Accessor,
  Setter,
} from "solid-js";

type Props = {
  currentDate: Accessor<Date>;
  setCurrentMonth: Setter<number>;
  currentMonth: Accessor<number>;
  children?: JSX.Element;
};
const CalendarContext = createContext<Props>();

export const CalendarProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  const [currentDate, setCurrentDate] = createSignal<Date>(new Date());
  const [currentMonth, setCurrentMonth] = createSignal<number>(0);

  createEffect(() => {
    setCurrentMonth(new Date().getMonth());
  });

  return (
    <CalendarContext.Provider
      value={{ currentDate, currentMonth, setCurrentMonth }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => useContext(CalendarContext)!;
