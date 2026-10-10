export function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(start?: string | null, end?: string | null) {
  const formattedStart = formatDate(start);
  const formattedEnd = formatDate(end);
  if (!formattedStart && !formattedEnd) return null;
  if (!formattedStart) return `Until ${formattedEnd}`;
  if (!formattedEnd) return `From ${formattedStart}`;
  return `${formattedStart} - ${formattedEnd}`;
}
