const toISODate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

/** 11-08-2026 — the format eZee expects (calformat=dd-mm-yy) */
const toDisplayDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${d}-${m}-${y}`;
};

const addDays = (date: Date, days: number): Date => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const nightsBetween = (checkIn: Date, checkOut: Date): number =>
  Math.max(
    0,
    Math.round(
      (new Date(toISODate(checkOut)).getTime() -
        new Date(toISODate(checkIn)).getTime()) /
        86_400_000
    )
  );

export { toISODate, toDisplayDate, addDays, nightsBetween };