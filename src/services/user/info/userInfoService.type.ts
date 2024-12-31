export type UserContext = {
  id: string;
  name: string;
  email: string;
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
    fields: [
      {
        id: number;
        name: string;
      },
    ];
  };
  preferences: [
    {
      questionId: number;
      score: number;
    },
  ];
}

/** response */
export interface ReadUserInfoResponse {
  userContext: UserContext;
  roleInfo: RoleInfo;
  preferenceInfoList: PreferenceInfoList;
  newUser: boolean;
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
