export const ERROR_MESSAGES = {
  BAD_REQUEST: '잘못된 요청입니다.',
  UNAUTHORIZED: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.',
  FORBIDDEN: '해당 기능에 대한 권한이 없습니다.',
  NOT_FOUND: '요청한 리소스를 찾을 수 없습니다.',
  CONFLICT: '이미 존재하는 데이터입니다.',
  SERVER_ERROR: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  NETWORK_ERROR: '서버 연결이 원활하지 않습니다.',
  UNKNOWN_ERROR: '네트워크 연결 오류 또는 기타 오류가 발생했습니다.',
} as const;
