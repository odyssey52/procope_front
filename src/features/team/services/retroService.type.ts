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

export interface UpdateRetroTitleParams {
  teamId: string;
  retroId: string;
}

export interface ReadRetroProblemListParams {
  retroId: string;
  kanbanStatus: KanbanStatus;
}

// Payload
export interface CreateRetroPayload {
  title: string;
  teamId: string;
}

export interface UpdateRetroTitlePayload {
  title: string;
}

// response
export type CreateRetroResponse = number;
export type ReadRetroListItem = {
  id: number;
  title: string;
  picture: string;
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

export type ReadRetroProblemListResponse = {
  count: number;
  payload: [
    {
      id: number;
      userRole: string;
      createUserInfo: {
        id: string;
        name: string;
        profileImageUrl: string;
      };
      title: string;
      content: string;
      kanbanStatus: KanbanStatus;
      updatedAt: string;
    },
  ];
};
// interface
export type KanbanStatus = 'RCG' | 'PRG' | 'OK' | 'KEP';
