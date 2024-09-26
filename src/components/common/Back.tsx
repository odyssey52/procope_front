import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './ui/icon/Icon';

const Back = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper onClick={onClick}>
      <Icon src="/assets/icons/line/direction-left.svg" width="36" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  display: flex;
`;

Back.displayName = 'Back';

export default Back;
