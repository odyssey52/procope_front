import { TeamType, UserRole } from '@/shared/types/team';

// Params
export interface ReadTeamDetailParams {
  teamId: string;
}
export interface DeleteTeamParams {
  teamId: string;
}
export interface SecessionTeamParams {
  teamId: string;
}
export interface UpdateTeamParams {
  teamId: string;
}
export interface ReadRetroListParams {
  teamId: string;
}
export interface ReadTeamRoleCountParams {
  role: UserRole;
}
export interface CreateRetroParams {
  title: string;
  createdAt: string;
  joinUserIds: number[];
}

// Payload
export interface CreateTeamPayload {
  type: string;
  name: string;
  description: string;
}

export interface CreateInviteTeamPayload {
  url: string;
}

export interface UpdateTeamPayload {
  type: TeamType;
  name: string;
  description: string;
}

// response
export interface ReadTeamListResponse {
  count: number;
  team: {
    teamId: string;
    type: TeamType;
    name: string;
    description: string;
    myRole: UserRole;
    members: {
      userId: string;
      picture: string;
      userRole: string;
    }[];
  }[];
}

export interface ReadTeamDetailResponse {
  teamId: string;
  type: TeamType;
  name: string;
  description: string;
  members: {
    userId: string;
    picture: string;
    userRole: string;
  }[];
}

export interface CreateTeamResponse {
  url: string;
}

export type CreateInviteTeamResponse = string;

export type UpdateTeamResponse = string;

export type ReadRetroListItem = {
  id: number;
  title: string;
  createUserName: string;
  joinedUserIds: string[];
  createdAt: string;
  updatedAt: string;
};

export type ReadRetroListResponse = ReadRetroListItem[];

export type ReadTeamRoleCountResponse = {
  number: number;
};
