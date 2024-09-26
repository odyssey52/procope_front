import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import Icon from '@/components/common/ui/icon/Icon';
import styled from 'styled-components';

const ControlBox = () => {
  return (
    <Wrapper>
      <TextButton $rightIcon="/assets/icons/line/direction-down.svg" $type="16">
        최신순
      </TextButton>
      <Button $leftIcon="/assets/icons/line/plus.svg">팀 생성</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
`;
const Search = styled(Icon)``;

ControlBox.displayName = 'ControlBox';

export default ControlBox;
