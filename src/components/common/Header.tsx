import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './ui/button/Button';

const Header = () => {
  const { logout } = useAuthStore();
  const router = useRouter();
  const onClickLogout = () => {
    logout();
    alert('로그아웃 되었습니다.');
    router.push('/');
  };
  return (
    <Wrapper>
      <Logo type="icon" size={36} />
      <Button onClick={onClickLogout}>로그아웃</Button>
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
