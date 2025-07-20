import {
  readUserInfo,
  readUserInfoPreferences,
  readUserInfoRoles,
} from '@/features/user/services/info/userInfoService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const userInfoQueries = createQueryKeys('userInfo', {
  readUserInfo: (accessToken: string) => ({
    queryKey: ['userInfo', 'readUserInfo', accessToken],
    queryFn: readUserInfo,
  }),
  readUserInfoRoles: {
    queryKey: ['userInfo', 'readUserInfoRoles'],
    queryFn: readUserInfoRoles,
  },
  readUserInfoPreferences: {
    queryKey: ['userInfo', 'readUserInfoPreferences'],
    queryFn: readUserInfoPreferences,
  },
});

export default userInfoQueries;
