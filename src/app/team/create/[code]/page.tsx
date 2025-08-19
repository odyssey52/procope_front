import TeamCreateDonePage from '@/features/team/components/create/done/TeamCreateDonePage';

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  return <TeamCreateDonePage code={code} />;
};

page.displayName = 'page';

export default page;
