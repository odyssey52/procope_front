import { readUserInfo, readUserInfoPreferences, readUserInfoRoles } from '@/services/user/info/userInfoService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const userInfoQueries = createQueryKeys('userInfo', {
  readUserInfo: {
    queryKey: ['userInfo', 'readUserInfo'],
    queryFn: readUserInfo,
  },
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
