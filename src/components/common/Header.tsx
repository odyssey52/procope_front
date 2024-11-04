import styled from 'styled-components';
import Logo from './Logo';
import Avatar from './ui/avatar/Avatar';
import SelectOption from './ui/selectOption/SelectOption';
import { TeamCardListProps } from '../pages/team/TeamCardList';
import { TagList } from './ui/card/TeamCard';

interface HeaderProps {
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
}

const Header = ({ teamList, profile, nickname }: HeaderProps) => {
  return (
    <Wrapper>
      <LeftSection>
        <Logo type="icon" size={36} />
        {teamList && <SelectOption teamList={teamList} />}
      </LeftSection>
      <RightSection>{profile && <Avatar type="initial" size={36} nickname={nickname} />} </RightSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
`;

const LeftSection = styled.div`
  width: 152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.fontStyle.body_16_regular};
  select {
    border: none;
    outline: none;
  }
`;
const RightSection = styled.div``;

Header.displayName = 'Header';

export default Header;
