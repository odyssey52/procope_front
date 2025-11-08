import { IconFile, IconHome, IconInteractive, IconSetting, IconUsers02 } from '@/shared/assets/icons/line';

export const TEAM_SIDE_NAV_TABS = (teamId: string) => [
  {
    name: '대시보드',
    path: `/team/${teamId}/dashboard`,
    icon: <IconHome size={20} />,
  },
  {
    name: '목표 관리',
    path: `/team/${teamId}/goal`,
    icon: <IconInteractive size={20} />,
  },
  {
    name: '회고 관리',
    path: `/team/${teamId}/retro`,
    icon: <IconFile size={20} />,
    subTabs: [
      {
        name: '회고 목록',
        path: `/team/${teamId}/retro`,
      },
      {
        name: '히스토리',
        path: `/team/${teamId}/retro/history`,
      },
    ],
  },
  {
    name: '팀 관리',
    path: `/team/${teamId}/manage`,
    icon: <IconUsers02 size={20} />,
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
    icon: <IconSetting size={20} />,
  },
];
