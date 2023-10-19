export const getAllDatesForMonth = (year: number, month: number) => {
    const datesWithDayOfWeek = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.

    const fillerColumns = [];

    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month - 1 , day);
      if (date.getMonth() + 1 !== month) {
        break;
      }
      const dayOfWeek = daysOfWeek[date.getDay()];
      datesWithDayOfWeek.push({ day: day ,date: `${year}-${month}-${day}`, dayOfWeek });
    }

    for(let i = 0; i <  firstDayOfMonth; i++){
      fillerColumns.push({ day: null ,date: null, dayOfWeek: null })
    }
  
    return [...fillerColumns, ...datesWithDayOfWeek];
}

export const getCalendarMonthName = (month: number) => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return months[month - 1];
}