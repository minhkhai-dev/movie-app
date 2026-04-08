import { useMemo } from 'react';

export const useFormatDate = () => {
  const formatDate = (isoString: string | Date): string => {
    if (!isoString) return '';

    const date = isoString instanceof Date ? isoString : new Date(isoString);

    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return { formatDate };
};