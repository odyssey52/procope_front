import RefreshTokenService from '@/services/auth/refresh/refreshTokenService';
import * as types from '@/services/auth/refresh/refreshTokenService.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import REFRESH_QUERY_KEY from './queryKey';

const refreshTokenService = new RefreshTokenService({ isPublic: false });

export const useReadAccessTokenWithRefreshToken = () =>
  useQuery({
    queryKey: REFRESH_QUERY_KEY.READ_ACCESSTOKEN_WITH_REFRESHTOKEN,
    queryFn: () => refreshTokenService.readAccessTokenWithRefreshToken(),
  });

export const useCreateAccessTokenWithRefreshToken = () =>
  useMutation({
    mutationKey: REFRESH_QUERY_KEY.CREATE_ACCESSTOKEN_WITH_REFRESHTOKEN,
    mutationFn: (payload: types.createAccessTokenWithRefreshTokenPayload) =>
      refreshTokenService.createAccessTokenWithRefreshToken(payload),
  });
