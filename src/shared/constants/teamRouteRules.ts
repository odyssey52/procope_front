export interface TeamResourceRedirectRule {
  pattern: RegExp;
  getRedirectPath: (teamId: string, segments?: string[]) => string;
}

// 팀별 리소스 상세 페이지에 머물지 않도록 리다이렉트 규칙 정의
export const TEAM_RESOURCE_REDIRECT_RULES: TeamResourceRedirectRule[] = [
  {
    pattern: /^\/team\/[^/]+\/retro\/history(?:\/|$)/,
    getRedirectPath: (teamId: string, segments?: string[]) => {
      const currentSegments = segments ? [...segments] : [];
      const teamIndex = currentSegments.indexOf('team');
      if (teamIndex !== -1 && teamIndex + 1 < currentSegments.length) {
        currentSegments[teamIndex + 1] = teamId;
        return currentSegments.join('/');
      }
      return `/team/${teamId}/retro/history`;
    },
  },
  {
    pattern: /^\/team\/[^/]+\/retro\/(?!history(?:\/|$))[^/]+(?:\/|$)/,
    getRedirectPath: (teamId: string) => `/team/${teamId}/retro`,
  },
];
