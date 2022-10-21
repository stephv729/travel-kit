export function shortDate(dateStr) {
  console.log(dateStr)
  if (!dateStr) return
  const date = new Date(dateStr);
  const parseOptions = { weekday: "short", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", parseOptions).format(date);
}
