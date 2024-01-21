const formatDateMs = (dateMs: number | undefined, defaultValue: string = ''): string => {
  if (typeof dateMs === 'undefined') {
    return defaultValue;
  }

  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(dateMs));
};

export { formatDateMs };