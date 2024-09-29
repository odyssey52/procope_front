import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import Container from '@/components/common/ui/Container';
import HeaderLayout from '@/components/layout/HeaderLayout';

const TeamCreate = () => {
  const paths = {
    '팀 목록': '/team',
    '팀 생성': '/team/create',
  };
  return (
    <HeaderLayout>
      <Container>
        <Breadcrumbs paths={paths} />
      </Container>
    </HeaderLayout>
  );
};

TeamCreate.displayName = 'TeamCreate';

export default TeamCreate;
