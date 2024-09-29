import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ControlBox = () => {
  return (
    <Wrapper>
      <TextButton $rightIcon="/assets/icons/line/direction-down.svg" $type="16">
        최신순
      </TextButton>
      <Link to="/team/create">
        <Button $leftIcon="/assets/icons/line/plus.svg" $iconColor="invers">
          팀 생성
        </Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
`;

ControlBox.displayName = 'ControlBox';

export default ControlBox;
