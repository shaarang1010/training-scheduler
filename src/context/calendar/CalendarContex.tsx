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
  setCurrentDate: Setter<Date>;
  currentYear: Accessor<number>;
  setCurrentYear: Setter<number>;
  children?: JSX.Element;
};
const CalendarContext = createContext<Props>();

export const CalendarProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  const [currentDate, setCurrentDate] = createSignal<Date>(new Date());
  const [currentMonth, setCurrentMonth] = createSignal<number>(0);
  const [currentYear, setCurrentYear] = createSignal<number>(0);

  createEffect(() => {
    const d = new Date();
    setCurrentMonth(d.getMonth());
    setCurrentYear(d.getFullYear());
  });

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        currentMonth,
        setCurrentMonth,
        setCurrentDate,
        currentYear,
        setCurrentYear,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => useContext(CalendarContext)!;
