import { IconDirectionDown, IconPlus } from '@/assets/icons/line';
import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ControlBox = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TextButton leftIcon={<IconDirectionDown />} $type="16">
        최신순
      </TextButton>
      <Button leftIcon={<IconPlus />} onClick={() => router.push('/team/create')}>
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
