export enum ErrorCode {
  // 인증 관련
  AUTHENTICATION_FAILED = 'AUTH001',
  TOKEN_EXPIRED = 'AUTH002',
}

export interface ErrorMessage {
  title: string;
  description?: string;
  status: 'success' | 'warning' | 'danger' | 'error';
}

export type ErrorMessages = {
  [key in ErrorCode]: ErrorMessage;
};

export const ERROR_MESSAGES: ErrorMessages = {
  [ErrorCode.AUTHENTICATION_FAILED]: {
    title: '로그인 실패',
    description: '아이디 또는 비밀번호가 일치하지 않습니다.',
    status: 'danger',
  },
  [ErrorCode.TOKEN_EXPIRED]: {
    title: '토큰 만료',
    description: '로그인이 만료되었습니다. 다시 로그인해주세요.',
    status: 'warning',
  },
};
