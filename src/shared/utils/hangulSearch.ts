// 한글 자모 분해
const decomposeHangul = (char: string): string[] => {
  const code = char.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) {
    const choseongIndex = Math.floor((code - 0xac00) / 28 / 21);
    const jungseongIndex = Math.floor((code - 0xac00) / 28) % 21;
    const jongseongIndex = (code - 0xac00) % 28;

    const choseong = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ][choseongIndex];
    const jungseong = [
      'ㅏ',
      'ㅐ',
      'ㅑ',
      'ㅒ',
      'ㅓ',
      'ㅔ',
      'ㅕ',
      'ㅖ',
      'ㅗ',
      'ㅘ',
      'ㅙ',
      'ㅚ',
      'ㅛ',
      'ㅜ',
      'ㅝ',
      'ㅞ',
      'ㅟ',
      'ㅠ',
      'ㅡ',
      'ㅢ',
      'ㅣ',
    ][jungseongIndex];
    const jongseong =
      jongseongIndex > 0
        ? [
            '',
            'ㄱ',
            'ㄲ',
            'ㄳ',
            'ㄴ',
            'ㄵ',
            'ㄶ',
            'ㄷ',
            'ㄹ',
            'ㄺ',
            'ㄻ',
            'ㄼ',
            'ㄽ',
            'ㄾ',
            'ㄿ',
            'ㅀ',
            'ㅁ',
            'ㅂ',
            'ㅄ',
            'ㅅ',
            'ㅆ',
            'ㅇ',
            'ㅈ',
            'ㅊ',
            'ㅋ',
            'ㅌ',
            'ㅍ',
            'ㅎ',
          ][jongseongIndex]
        : '';

    return [choseong, jungseong, jongseong].filter(Boolean);
  }
  return [char];
};

// 문자열을 자모로 분해
const decomposeString = (str: string): string => {
  return str
    .split('')
    .map((char) => decomposeHangul(char).join(''))
    .join('');
};

// 한글 검색 함수
export const searchHangul = (target: string, keyword: string): boolean => {
  const lowerTarget = target.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();

  // 1. 일반 문자열 검색
  if (lowerTarget.includes(lowerKeyword)) {
    return true;
  }

  // 2. 자모 분해 검색
  const targetJamo = decomposeString(target);
  const keywordJamo = decomposeString(keyword);

  if (targetJamo.includes(keywordJamo)) {
    return true;
  }

  return false;
};

// 배열에서 한글 검색
export const filterByHangulSearch = <T>(items: T[], keyword: string, getSearchText: (item: T) => string): T[] => {
  if (!keyword.trim()) {
    return items;
  }

  return items.filter((item) => searchHangul(getSearchText(item), keyword));
};
