'use client';

import RetroHistoryPage from '@/features/team/components/detail/retro/history/RetroHistoryPage';
import Error from '@/shared/ui/error/Error';

const page = () => {
  return <Error title="준비 중" description="추후 업데이트 예정입니다." />;
  // return <RetroHistoryPage />;
};

page.displayName = 'page';

export default page;
