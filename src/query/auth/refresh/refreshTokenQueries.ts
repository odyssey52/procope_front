import * as types from '@/services/auth/refresh/refreshTokenService.type';
import RefreshTokenService from '@/services/auth/refresh/refreshTokenService';
import { useMutation } from '@tanstack/react-query';
import AUTH_QUERY_KEY from '../queryKey';

const refreshTokenService = new RefreshTokenService({ isPublic: false });

export const useReadAccessTokenWithRefreshToken = () =>
  useMutation({
    mutationKey: AUTH_QUERY_KEY.AUTH_CREATE_TOKEN_NAVER,
    mutationFn: () => refreshTokenService.readAccessTokenWithRefreshToken(),
  });

export const useCreateAccessTokenWithRefreshToken = () =>
  useMutation({
    mutationKey: AUTH_QUERY_KEY.AUTH_CREATE_TOKEN_GOOGLE,
    mutationFn: (payload: types.createAccessTokenWithRefreshTokenPayload) =>
      refreshTokenService.createAccessTokenWithRefreshToken(payload),
  });
