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
  type: 'SQUAD' | 'FEATURE';
  name: string;
  description: string;
}

// response
export interface ReadTeamListResponse {
  count: number;
  team: {
    teamId: string;
    type: 'SQUAD' | 'FEATURE';
    name: string;
    description: string;
    members: {
      userId: string;
      picture: string;
      userRole: string;
    }[];
  }[];
}

export interface ReadTeamDetailResponse {
  teamId: string;
  type: 'SQUAD' | 'FEATURE';
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
