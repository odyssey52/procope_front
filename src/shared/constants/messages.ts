// 2회 이상 재사용되는 메시지
export const MESSAGES = {
  TOAST: {
    COPY_SUCCESS: '클립보드에 복사되었습니다.',
    COPY_ERROR: '클립보드 복사 실패:',
  },

  ERROR: {
    RETRY: '잠시 후 다시 시도해주세요.',
    BAD_REQUEST: '잘못된 요청입니다.',
    UNAUTHORIZED: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.',
    FORBIDDEN: '해당 기능에 대한 권한이 없습니다.',
    NOT_FOUND: '요청한 리소스를 찾을 수 없습니다.',
    CONFLICT: '이미 존재하는 데이터입니다.',
    SERVER_ERROR: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    NETWORK_ERROR: '서버 연결이 원활하지 않습니다.',
    UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
    LOGOUT_FAILED: '로그아웃 중 문제가 발생했습니다. 다시 시도해주세요.',
  },
};
