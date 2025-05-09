import { IconFile, IconHome, IconInteractive, IconSetting, IconUsers02 } from '@/shared/assets/icons/line';

export const TEAM_SIDE_NAV_TABS = (teamId: string) => [
  {
    name: '대시보드',
    path: `/team/${teamId}/dashboard`,
    icon: <IconHome />,
  },
  {
    name: '목표관리',
    path: `/team/${teamId}/goal`,
    icon: <IconInteractive />,
  },
  {
    name: '회고관리',
    path: `/team/${teamId}/retro`,
    icon: <IconFile />,
  },
  {
    name: '팀 관리',
    path: `/team/${teamId}/manage`,
    icon: <IconUsers02 />,
    subTabs: [
      {
        name: '팀 설정',
        path: `/team/${teamId}/manage/setting`,
      },
      {
        name: '참여 관리',
        path: `/team/${teamId}/manage/member`,
      },
    ],
  },
  {
    name: '설정',
    path: `/team/${teamId}/setting`,
    icon: <IconSetting />,
  },
];
