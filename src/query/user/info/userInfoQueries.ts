import { readUserInfo, readUserInfoPreferences, readUserInfoRoles } from '@/services/user/info/userInfoService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const userInfoQueries = createQueryKeys('userInfo', {
  readUserInfo: {
    queryKey: null,
    queryFn: readUserInfo,
  },
  readUserInfoRoles: {
    queryKey: null,
    queryFn: readUserInfoRoles,
  },
  readUserInfoPreferences: {
    queryKey: null,
    queryFn: readUserInfoPreferences,
  },
});

export default userInfoQueries;
