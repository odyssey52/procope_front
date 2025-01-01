import { readAccessTokenWithRefreshToken } from '@/services/auth/refresh/refreshTokenService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const refreshTokenQueries = createQueryKeys('refreshToken', {
  accessTokenWithRefreshToken: {
    queryKey: null,
    queryFn: readAccessTokenWithRefreshToken,
  },
});
