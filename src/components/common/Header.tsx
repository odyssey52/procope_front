import useAuthStore from '@/store/auth/auth';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './ui/button/Button';

const Header = () => {
  const { logout } = useAuthStore();

  return (
    <Wrapper>
      <Logo type="icon" size={36} />
      <Button onClick={logout}>로그아웃</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  padding: 8px 24px;
`;

Header.displayName = 'Header';

export default Header;
