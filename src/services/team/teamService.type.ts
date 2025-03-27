export interface ReadTeamListResponse {
  count: number;
  team: {
    teamId: string;
    type: string;
    name: string;
    description: string;
    members: [
      {
        userId: string;
        picture: string;
        userRole: string;
      },
    ];
  }[];
}
