import TeamCreateDone from '@/components/pages/team/create/done/TeamCreateDone';

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  return <TeamCreateDone code={code} />;
};

page.displayName = 'page';

export default page;
