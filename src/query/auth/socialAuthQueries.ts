import { useMutation } from '@tanstack/react-query';
import AUTH_QUERY_KEY from './queryKey';
import SocialAuthService from '@/services/auth/socialAuthService';
import * as types from '@/services/auth/socialAuthService.type';

const socialAuthService = new SocialAuthService({ isPublic: false });

export const useCreateTokenWithNaver = () =>
  useMutation({
    mutationKey: AUTH_QUERY_KEY.AUTH_CREATE_TOKEN_NAVER,
    mutationFn: (payload: types.CreateTokenWithNaverPayload) => socialAuthService.createTokenWithNaver(payload),
  });