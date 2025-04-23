import TeamCreateDone from '@/features/team/components/create/done/TeamCreateDone';

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  return <TeamCreateDone code={code} />;
};

page.displayName = 'page';

export default page;
