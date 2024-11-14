import type { MonthAndYear } from '$types/MonthAndYear';

const formatMonthAndYear = (
  monthAndYear: MonthAndYear | undefined,
  defaultValue: string = ''
): string => {
  if (typeof monthAndYear === 'undefined') {
    return defaultValue;
  }

  const { year, month } = monthAndYear;

  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month)));
};

export { formatMonthAndYear };
