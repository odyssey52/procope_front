import { JobSub } from '@/features/onboarding/SecondStep';
import { RoleInfo } from '@/features/user/services/info/userInfoService.type';
import { UserRole } from '@/shared/types/team';

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
  kanbanStatus: KanbanStatus;
}

export interface CreateRetroProblemParams {
  retroId: string | number;
}

export interface UpdateRetroProblemParams {
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
  kanbanStatus: KanbanStatus;
}

export interface UpdateRetroProblemPayload {
  title: string;
  content: string;
  kanbanStatus: KanbanStatus;
}

export interface CreateRetroMemberPayload {
  targetUserId: string;
}

export interface DeleteRetroMemberPayload {
  targetUserId: string;
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
  payload: RetroProblemListItem[];
};

export type ReadRetroMemberListResponse = {
  payload: RetroMemberListItem[];
};

// interface
export type KanbanStatus = 'RCG' | 'PRG' | 'OK' | 'KEP';
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
