import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Icon from './ui/icon/Icon';

const Back = () => {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.back()}>
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
