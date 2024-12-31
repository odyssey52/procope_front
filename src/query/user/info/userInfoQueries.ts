import UserInfoService from '@/services/user/info/userInfoService';
import * as types from '@/services/user/info/userInfoService.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import USER_INFO_QUERY_KEY from './queryKey';

const userInfoService = new UserInfoService({ isPublic: false });

export const useReadUserInfo = () =>
  useQuery({
    queryKey: USER_INFO_QUERY_KEY.READ_USER_INFO,
    queryFn: () => userInfoService.readUserInfo(),
  });

export const useUpdateUserInfo = () =>
  useMutation({
    mutationKey: USER_INFO_QUERY_KEY.UPDATE_USER_INFO,
    mutationFn: (payload: types.UpdateUserInfoPayload) => userInfoService.updateUserInfo(payload),
  });

export const useReadUserInfoRoles = () =>
  useQuery({
    queryKey: USER_INFO_QUERY_KEY.READ_USER_INFO_ROLES,
    queryFn: () => userInfoService.readUserInfoRoles(),
  });

export const useReadUserInfoPreferences = () =>
  useQuery({
    queryKey: USER_INFO_QUERY_KEY.READ_USER_INFO_PREFERENCES,
    queryFn: () => userInfoService.readUserInfoPrefrences(),
  });
