'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params.teamId as string;

  useEffect(() => {
    router.push(`/team/${teamId}/dashboard`);
  }, [teamId, router]);

  return null;
};

page.displayName = 'page';

export default page;
