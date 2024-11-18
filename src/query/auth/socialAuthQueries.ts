import SocialAuthService from '@/services/auth/socialAuthService';
import * as types from '@/services/auth/socialAuthService.type';
import { useMutation } from '@tanstack/react-query';
import AUTH_QUERY_KEY from './queryKey';

const socialAuthService = new SocialAuthService({ isPublic: false });

export const useCreateTokenWithNaver = () =>
  useMutation({
    mutationKey: AUTH_QUERY_KEY.AUTH_CREATE_TOKEN_NAVER,
    mutationFn: (payload: types.CreateTokenWithNaverPayload) => socialAuthService.createTokenWithNaver(payload),
  });

  export const useCreateTokenWithGoogle = () =>
    useMutation({
      mutationKey: AUTH_QUERY_KEY.AUTH_CREATE_TOKEN_GOOGLE,
      mutationFn: (payload: types.CreateTokenWithGooglePayload) => socialAuthService.createTokenWithGoogle(payload),
    });
