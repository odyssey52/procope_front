/**
 * ISO 8601 형식의 날짜 문자열을 YYYY.MM.DD 형식으로 변환합니다.
 * @param isoDateString - ISO 8601 형식의 날짜 문자열 (예: '2025-06-01T10:56:35.33010582')
 * @returns YYYY.MM.DD 형식의 날짜 문자열 (예: '2025.06.01')
 */
export const formatDateToDot = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
