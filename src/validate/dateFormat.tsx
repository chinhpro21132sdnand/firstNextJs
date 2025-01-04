function DateFormat(date: number): string {
  const datedate = new Date(date);
  const dateDay = new Date();
  if (datedate < dateDay) {
    return `${datedate.getHours()}:${datedate.getMinutes()}`;
  } else {
    return `${datedate.getFullYear()}-${datedate.getMonth()}-${datedate.getDate()}`;
  }
}
export default DateFormat;
