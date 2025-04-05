import InvitePage from '@/components/pages/team/invite/InvitePage';

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  return <InvitePage code={code} />;
};

page.displayName = 'page';

export default page;
