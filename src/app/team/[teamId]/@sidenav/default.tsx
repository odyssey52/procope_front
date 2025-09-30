'use client';

import { TEAM_SIDE_NAV_TABS } from '@/shared/constants/sideNavTab';
import SideNav from '@/shared/ui/tab/SideNav';
import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams();
  const teamId = params.teamId as string;

  return <SideNav tabList={TEAM_SIDE_NAV_TABS(teamId)} />;
};

export default page;
