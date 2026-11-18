// Dates are stored as YYYY-MM-DD and formatted in UTC so they never shift a day
// depending on the build machine's timezone.
export function formatDate(date: string, style: 'iso' | 'long' = 'iso'): string {
  if (style === 'iso') return date;
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
