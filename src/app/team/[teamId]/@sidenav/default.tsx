'use client';

import SideNav from '@/components/common/ui/tab/SideNav';
import { TEAM_SIDE_NAV_TABS } from '@/constants/sideNavTab';
import { useParams } from 'next/navigation';

export default function sidenav() {
  const params = useParams();
  const teamId = params.teamId as string;

  return <SideNav tabList={TEAM_SIDE_NAV_TABS(teamId)} />;
}
