import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const fromNow = (date) => dayjs(
  (typeof date === 'string') ? new Date(date) : date
).fromNow();