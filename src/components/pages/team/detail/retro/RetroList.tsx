import { IconAddCircle } from '@/assets/icons/line';
import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import PartCellContent from '@/components/common/ui/part/PartCellContent';
import PageTitle from '@/components/common/ui/title/PageTitle';
import styled from 'styled-components';

const RetroList = () => {
  const paths = {
    회고관리: '/team/[teamId]/retro',
  };

  return (
    <Wrapper>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={paths} />
          <PageTitle title="회고관리" />
        </TitleBox>
      </Head>
      <PartCellContent icon={<IconAddCircle />} description="회고를 관리합니다." />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
RetroList.displayName = 'RetroList';

export default RetroList;
