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
  retroId: string | number;
}

export interface DeleteRetroParams {
  teamId: string;
  retroId: string | number;
}

export interface UpdateRetroTitleParams {
  teamId: string;
  retroId: string | number;
}

export interface ReadRetroProblemListParams {
  retroId: string | number;
  kanbanStatus: KanbanStatus | ProblemKanbanStatus;
}

export interface CreateRetroProblemParams {
  retroId: string | number;
}

export interface DeleteRetroProblemParams {
  retroId: string | number;
  problemId: string | number;
}

export interface UpdateRetroProblemParams {
  retroId: string | number;
  problemId: string | number;
}

export interface ReadRetroProblemDetailParams {
  retroId: string | number;
  problemId: string | number;
}

export interface ReadRetroMemberListParams {
  teamId: string;
  retroId: string | number;
}

export interface CreateRetroMemberParams {
  teamId: string;
  retroId: string | number;
}

export interface DeleteRetroMemberParams {
  teamId: string;
  retroId: string | number;
}

export interface UpdateRetroProblemStatusParams {
  retroId: string | number;
  problemId: string | number;
}

export interface UpdateRetroProblemCompletedAtParams {
  retroId: string | number;
  problemId: string | number;
}

export interface UpdateRetroDateParams {
  teamId: string;
  retroId: string | number;
}

export interface CreateRetroSolutionParams {
  retroId: string | number;
  problemId: string | number;
}

export interface UpdateRetroSolutionParams {
  retroId: string | number;
  problemId: string | number;
  solutionId: string | number;
}

export interface DeleteRetroSolutionParams {
  retroId: string | number;
  problemId: string | number;
  solutionId: string | number;
}

// Payload
export interface CreateRetroPayload {
  title: string;
  teamId: string;
}

export interface UpdateRetroTitlePayload {
  title: string;
}

export interface CreateRetroProblemPayload {
  title: string;
  content: string;
  kanbanStatus: ProblemKanbanStatus | KanbanStatus;
}

export interface UpdateRetroProblemPayload {
  title: string;
  content: string;
}

export interface DeleteRetroProblemPayload {
  kanbanStatus: KanbanStatus | ProblemKanbanStatus;
}

export interface CreateRetroMemberPayload {
  targetUserId: string;
}

export interface DeleteRetroMemberPayload {
  targetUserId: string;
}

export interface UpdateRetroProblemStatusPayload {
  kanbanStatus: ProblemKanbanStatus;
}

export interface UpdateRetroProblemCompletedAtPayload {
  completedTime: string;
}

export interface UpdateRetroDatePayload {
  retroDate: string;
}

export interface CreateRetroSolutionPayload {
  title: string;
  content: string;
}

export interface UpdateRetroSolutionPayload {
  title: string;
  content: string;
}

// response
export type CreateRetroResponse = {
  retroId: string | number;
};

export type ReadRetroListItem = {
  id: number;
  title: string;
  picture: string;
  createUserName: string;
  joinedUserIds: string[];
  retroDate: string;
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
  retroDate: string;
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
  payload: RetroProblemListItem[];
};

export interface ReadRetroProblemDetailResponse {
  userRole: string;
  createUserInfo: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
  title: string;
  content: string;
  kanbanStatus: KanbanStatus;
  solutions: RetroProblemSolutionListItem[];
  completedAt: string;
  updatedAt: string;
}

export type ReadRetroMemberListResponse = {
  payload: RetroMemberListItem[];
};

// interface
export type KanbanStatus = 'RCG' | 'PRG' | 'OK' | 'KEP';
export type ProblemKanbanStatus = Omit<KanbanStatus, 'KEP'>;

export interface RetroProblemListItem {
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
}

export type RetroMemberListItem = {
  userId: string;
  name: string;
  profileImage: string;
  inviteStatus: boolean;
};

export type RetroProblemSolutionListItem = {
  id: number;
  title: string;
  updatedAt: string;
  createUserInfo: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
};
