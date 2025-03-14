import { redirect } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = await params;
  redirect(`/team/${teamId}/dashboard`);
};

export default page;
