function DateFormat(date: number): string {
  const datedate = new Date(date);
  console.log(datedate, "datedate");
  const dateDay = new Date();
  console.log(dateDay, "dateDay");
  if (datedate < dateDay) {
    return `${datedate.getHours()}:${datedate.getMinutes()}`;
  } else {
    return `${datedate.getFullYear()}-${datedate.getMonth()}-${datedate.getDate()}`;
  }
}
export default DateFormat;
