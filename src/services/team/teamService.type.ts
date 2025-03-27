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
