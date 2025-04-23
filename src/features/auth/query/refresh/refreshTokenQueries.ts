import { readAccessTokenWithRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const refreshTokenQueries = createQueryKeys('refreshToken', {
  accessTokenWithRefreshToken: {
    queryKey: null,
    queryFn: readAccessTokenWithRefreshToken,
  },
});
