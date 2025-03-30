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

export interface CreateTeamRequest {
  type: string;
  name: string;
  description: string;
}

export interface CreateTeamResponse {
  url: string;
}
