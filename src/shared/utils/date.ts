/**
 * ISO 8601 형식의 날짜 문자열을 YYYY.MM.DD 형식으로 변환합니다.
 * @param isoDateString - ISO 8601 형식의 날짜 문자열 (예: '2025-06-01T10:56:35.33010582')
 * @returns YYYY.MM.DD 형식의 날짜 문자열 (예: '2025.06.01')
 */
export const formatDateToDot = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

/**
 * YYYY.MM.DD 형식의 날짜 문자열을 ISO 8601 형식으로 변환합니다.
 * @param dotDateString - YYYY.MM.DD 형식의 날짜 문자열 (예: '2025.08.25')
 * @returns ISO 8601 형식의 날짜 문자열 (예: '2025-08-25T00:00:00.000Z')
 */
export const formatDotToISO = (dotDateString: string): string => {
  // YYYY.MM.DD 형식을 YYYY-MM-DD로 변환
  const dateOnly = dotDateString.replace(/\./g, '-');

  // 날짜 객체 생성 (시간은 00:00:00으로 설정)
  const date = new Date(`${dateOnly}T00:00:00.000Z`);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toISOString();
};

/**
 * YYYY.MM.DD 형식의 날짜 문자열을 특정 시간과 함께 ISO 8601 형식으로 변환합니다.
 * @param dotDateString - YYYY.MM.DD 형식의 날짜 문자열 (예: '2025.08.25')
 * @param hours - 시간 (0-23, 기본값: 0)
 * @param minutes - 분 (0-59, 기본값: 0)
 * @param seconds - 초 (0-59, 기본값: 0)
 * @returns ISO 8601 형식의 날짜 문자열 (예: '2025-08-25T07:14:08.000Z')
 */
export const formatDotToISOWithTime = (
  dotDateString: string,
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0,
): string => {
  // YYYY.MM.DD 형식을 YYYY-MM-DD로 변환
  const dateOnly = dotDateString.replace(/\./g, '-');

  // 날짜 객체 생성 (지정된 시간으로 설정)
  const date = new Date(
    `${dateOnly}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.000Z`,
  );

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toISOString();
};
