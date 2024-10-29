import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ControlBox = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TextButton $rightIcon="/assets/icons/line/direction-down.svg" $type="16">
        최신순
      </TextButton>
      <Button $leftIcon="/assets/icons/line/plus.svg" $iconColor="invers" onClick={() => router.push('/team/create')}>
        팀 생성
      </Button>
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
