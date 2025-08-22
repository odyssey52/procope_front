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
export interface ReadTeamRoleCountParams {
  role: UserRole;
}

export interface ReadTeamUsersParams {
  teamId: string;
}
export interface DeleteTeamUserParams {
  teamId: string;
  userId: string;
}
export interface UpdateTeamUserParams {
  teamId: string;
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
export type UpdateTeamUserItem = {
  userId: string;
  role: UserRole;
};
export type UpdateTeamUserPayload = UpdateTeamUserItem[];

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

export interface ReadTeamUsersResponse {
  count: number;
  teamMember: {
    user: {
      id: string;
      name: string;
      email: string;
      roleInfo: {
        id: string;
        name: string;
        fields: {
          id: string;
          name: string;
        }[];
      };
    };
    teamRole: UserRole;
    createdAt: string;
    lastActiveAt: string;
  }[];
}

export interface ReadTeamDetailResponse {
  teamId: string;
  type: TeamType;
  name: string;
  description: string;
  myRole: UserRole;
  inviteUrl: string;
}

export interface CreateTeamResponse {
  url: string;
}

export type CreateInviteTeamResponse = string;

export type UpdateTeamResponse = string;

export type ReadTeamRoleCountResponse = {
  number: number;
};
export type UpdateTeamUserResponse = string;
