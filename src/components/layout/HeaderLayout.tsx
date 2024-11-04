import { TagList } from '@/components/common/ui/card/TeamCard';
import styled from 'styled-components';
import Header from '../common/Header';

interface HeaderLayoutProps {
  teamList?: {
    tag: keyof TagList;
    name: string;
    description: string;
    members: {
      nickname?: string;
      image?: string;
    }[];
  }[];
  profile?: string;
  nickname?: string;
  children?: React.ReactNode;
}

const HeaderLayout = ({ teamList, profile, nickname, children }: HeaderLayoutProps) => {
  return (
    <Wrapper>
      <Header teamList={teamList} profile={profile} nickname={nickname} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

HeaderLayout.displayName = 'HeaderLayout';

export default HeaderLayout;
