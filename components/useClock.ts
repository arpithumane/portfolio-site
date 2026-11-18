'use client';

import { useEffect, useState } from 'react';

// Current time in the given timezone, e.g. "23:41 EST". Null until mounted so
// the static HTML and first client render match.
export function useClock(timeZone: string): string | null {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
      timeZoneName: 'short',
    });
    const tick = () => setTime(fmt.format(new Date()).replace(/^24:/, '00:'));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
