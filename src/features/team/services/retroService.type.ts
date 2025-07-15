// Params
export interface ReadRetroListParams {
  teamId: string;
}

export interface CreateRetroParams {
  title: string;
  createdAt: string;
  joinUserIds: number[];
}

export interface ReadRetroParams {
  teamId: string;
  retroId: string;
}

// Payload
export interface CreateRetroPayload {
  title: string;
  teamId: string;
}

// response
export type CreateRetroResponse = number;
export type ReadRetroListItem = {
  id: number;
  title: string;
  createUserName: string;
  joinedUserIds: string[];
  createdAt: string;
  updatedAt: string;
};

export type ReadRetroListResponse = ReadRetroListItem[];

export interface ReadRetroResponse {
  id: number;
  title: string;
  createUserInfo: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
  createdAt: string;
  joinUserInfos: [
    {
      id: string;
      name: string;
      profileImageUrl: string;
    },
  ];
}
