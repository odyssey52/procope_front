import RefreshTokenService from '@/services/auth/refresh/refreshTokenService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import REFRESH_QUERY_KEY from './queryKey';

const refreshTokenService = new RefreshTokenService({ isPublic: false });

export const refreshTokenQueries = createQueryKeys('refreshToken', {
  accessTokenWithRefreshToken: {
    queryKey: null,
    queryFn: () => refreshTokenService.readAccessTokenWithRefreshToken(),
  },
});
