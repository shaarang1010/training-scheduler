export const getAllDatesForMonth = (year: number, month: number) => {
    const datesWithDayOfWeek = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month - 1, day);
      if (date.getMonth() + 1 !== month) {
        break;
      }
      const dayOfWeek = daysOfWeek[date.getDay()];
      datesWithDayOfWeek.push({ day: day ,date: `${year}-${month}-${day}`, dayOfWeek });
    }
  
    return datesWithDayOfWeek;
  }