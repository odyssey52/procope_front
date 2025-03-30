import TeamCreateDone from '@/components/pages/team/create/done/TeamCreateDone';

const page = async ({ params }: { params: Promise<{ url: string }> }) => {
  const { url } = await params;
  return <TeamCreateDone url={url} />;
};

page.displayName = 'page';

export default page;
