import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import HeaderLayout from '@/components/layout/HeaderLayout';
import styled from 'styled-components';

const Team = () => {
  const paths = {
    '팀 목록': '/team',
    '팀 생성': '/team/create',
  };
  return (
    <HeaderLayout>
      <Content>
        <Breadcrumbs paths={paths} />
      </Content>
    </HeaderLayout>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 24px;
`;

Team.displayName = 'Team';

export default Team;
