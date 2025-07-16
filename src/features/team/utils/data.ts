export const PLACEHOLDER_TEAM_NAME = '팀 이름을 입력해 주세요. (최대 20자)';
export const PLACEHOLDER_TEAM_DESCRIPTION = '팀을 간단히 소개해 주세요. (최대 200자)';

export const ERROR_DESCRIPTION_TEAM_NAME = '팀 이름은 20글자 이하로 알파벳, 숫자, 한글만 조합할 수 있습니다.';
export const ERROR_DESCRIPTION_TEAM_DESCRIPTION = '팀 소개는 200글자 이하로 알파벳, 숫자, 한글만 조합할 수 있습니다.';

export const teamNameValid = (teamName: string) =>
  teamName.length <= 20 && /^[a-zA-Z0-9가-힣\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(teamName);
export const teamDescriptionValid = (teamDescription: string) =>
  teamDescription.length <= 200 && /^[a-zA-Z0-9가-힣\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(teamDescription);

export const jobList = {
  개발: 'development',
  기획: 'planning',
  데이터: 'data',
  디자인: 'design',
  마케팅: 'marketing',
  영업: 'sales',
  운영: 'operations',
} as const;
export const formatDateToDotAndSlice = (date: string) => {
  return date.slice(0, 10).replace(/-/g, '.');
};
