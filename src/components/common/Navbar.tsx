import styled from 'styled-components';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo type="iconText" size={147} />
      {/* <Profile /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
`;

export default Navbar;
