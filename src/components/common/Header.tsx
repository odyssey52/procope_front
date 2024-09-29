import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  return (
    <Wrapper>
      <Logo type="iconText" size={147} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 8px 24px;
`;

Header.displayName = 'Header';

export default Header;
