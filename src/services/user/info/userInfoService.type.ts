import { JobSub } from '@/components/pages/onboarding/SecondStep';
import { Preference } from '@/components/pages/onboarding/ThirdStep';

export type UserContext = {
  id: string;
  name: string;
  email: string;
  picture: string;
  enabled: boolean;
  password: string;
  authorities: [
    {
      authority: string;
    },
  ];
  username: string;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
};

export type RoleInfo = {
  id: number;
  name: string;
  fields: [
    {
      id: number;
      name: string;
    },
  ];
};

export type PreferenceInfoList = {
  preferences: [
    {
      id: number;
      questionInfo: {
        id: number;
        description: string;
        parentId: number;
      };
      score: number;
    },
  ];
};

/** payload */
export interface UpdateUserInfoPayload {
  role: {
    id: number;
    name: string;
    fields: JobSub[];
  };
  preferences?: Preference[];
}

/** response */
export interface ReadUserInfoResponse {
  isNewUser: boolean;
  userContext: UserContext;
  roleInfo: RoleInfo;
  preferenceInfoList: PreferenceInfoList;
}

export type UpdateUserInfoResponse = ReadUserInfoResponse;

export interface ReadUserInfoRolesResponse {
  userContext: UserContext;
  roleInfo: RoleInfo;
}

export interface ReadUserInfoPreferencesResponse {
  userContext: UserContext;
  preferenceInfoList: PreferenceInfoList;
}
