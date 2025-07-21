import { AuthGuard } from '@/features/auth/components/authguard/AuthGuard';
import InvitePage from '@/features/team/components/invite/InvitePage';

const page = async () => {
  return (
    <AuthGuard>
      <InvitePage />
    </AuthGuard>
  );
};

page.displayName = 'page';

export default page;
