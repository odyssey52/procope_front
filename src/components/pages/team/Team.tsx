import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import PageSubTitle from '@/components/common/ui/title/PageSubTitle';
import PageTitle from '@/components/common/ui/title/PageTitle';
import HeaderLayout from '@/components/layout/HeaderLayout';
import styled from 'styled-components';
import ControlBox from './ControlBox';
import Tag from '@/components/common/ui/tag/Tag';

const Team = () => {
  const paths = {
    '팀 목록': '/team',
    '팀 생성': '/team/create',
  };
  return (
    <HeaderLayout>
      <Content>
        <Head>
          <TitleBox>
            <Breadcrumbs paths={paths} />
            <PageTitle title="Team" />
            <PageSubTitle first="총" point="5" last="개">
              <ControlBox />
            </PageSubTitle>
          </TitleBox>
        </Head>
        <Tag
          $style="transparent"
          $size="large"
          $leftIcon="/assets/icons/line/plus.svg"
          $rightIcon="/assets/icons/line/plus.svg"
        >
          tag
        </Tag>
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
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
Team.displayName = 'Team';

export default Team;
